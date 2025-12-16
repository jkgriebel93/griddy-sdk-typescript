/**
 * NFL SDK client for accessing NFL data from multiple API endpoints.
 *
 * This module provides the GriddyNFL class, the main entry point for accessing
 * NFL data including games, stats, rosters, and Next Gen Stats.
 *
 * @example
 * ```typescript
 * import { GriddyNFL } from 'griddy-sdk';
 *
 * const nfl = new GriddyNFL({ nflAuth: { accessToken: 'your_token' } });
 * const games = await nfl.games.getGames(2024, 'REG', 1);
 * ```
 */

import { NFL as NFLSettings } from "../settings";
import { SDKHooks } from "./_hooks";
import { BaseSDK } from "./baseSdk";
import { Games } from "./endpoints/regular/football/games";
import { createSecurity, type Security } from "./models/entities/security";
import {
	closeClients,
	SDKConfiguration,
	type SDKConfigurationOptions,
} from "./sdkConfiguration";

/**
 * Authentication information.
 */
export interface NFLAuth {
	/** Access token */
	accessToken: string;
	/** Refresh token (optional) */
	refreshToken?: string;
	/** Token expiration (optional) */
	expiresIn?: number;
}

/**
 * GriddyNFL SDK options.
 */
export interface GriddyNFLOptions {
	/** NFL authentication (required unless using email/password) */
	nflAuth?: NFLAuth;
	/** Login email for browser-based auth (not implemented in TypeScript) */
	loginEmail?: string;
	/** Login password for browser-based auth (not implemented in TypeScript) */
	loginPassword?: string;
	/** Request timeout in milliseconds */
	timeoutMs?: number;
	/** Debug logging enabled */
	debug?: boolean;
}

/**
 * Map of lazy-loaded sub-SDKs.
 */
interface SubSDKMap {
	games: Games;
	// Add other sub-SDKs here as they are implemented
	// rosters: Rosters;
	// standings: Standings;
	// stats: StatsSDK;
	// etc.
}

/**
 * Main client for accessing NFL data from multiple API endpoints.
 *
 * GriddyNFL provides unified access to NFL data through three API categories:
 *
 * - **Regular API**: Public NFL.com endpoints for games, rosters, standings
 * - **Pro API**: Advanced statistics, betting odds, player projections
 * - **Next Gen Stats**: Player tracking data and advanced analytics
 *
 * Sub-SDKs are loaded lazily on first access to minimize startup time.
 *
 * @example
 * ```typescript
 * // Initialize with auth token
 * const nfl = new GriddyNFL({ nflAuth: { accessToken: 'your_token' } });
 *
 * // Get games
 * const games = await nfl.games.getGames(2024, 'REG', 1);
 *
 * // Use with async/await pattern
 * try {
 *   const boxScore = await nfl.games.getBoxScore('game-id');
 *   console.log(boxScore);
 * } catch (error) {
 *   console.error('Error:', error);
 * }
 * ```
 */
export class GriddyNFL extends BaseSDK {
	private _games?: Games;

	/**
	 * Device/client information for API requests.
	 */
	private static clientData = {
		clientKey: NFLSettings.clientKey,
		clientSecret: NFLSettings.clientSecret,
		deviceId: crypto.randomUUID?.() ?? Math.random().toString(36).substring(2),
		deviceInfo: btoa(
			JSON.stringify({
				model: "desktop",
				version: "Chrome",
				osName: "Windows",
				osVersion: "10.0",
			}),
		),
		networkType: "other",
		peacockUUID: "undefined",
	};

	/**
	 * Initialize the GriddyNFL client.
	 *
	 * You must provide authentication via a pre-obtained auth token (nflAuth).
	 * Browser-based authentication is not implemented in the TypeScript version.
	 *
	 * @param options - SDK options
	 * @throws Error if no authentication is provided
	 *
	 * @example
	 * ```typescript
	 * const nfl = new GriddyNFL({
	 *   nflAuth: { accessToken: 'your_nfl_access_token' },
	 *   timeoutMs: 30000,
	 * });
	 * ```
	 */
	constructor(options: GriddyNFLOptions) {
		// Validate auth
		if (!options.nflAuth && (!options.loginEmail || !options.loginPassword)) {
			throw new Error(
				"You must provide either nflAuth or email/password combination.",
			);
		}

		if (options.nflAuth && (options.loginEmail || options.loginPassword)) {
			throw new Error(
				"You must provide either nflAuth OR email/password combination, not both.",
			);
		}

		// Browser-based auth is not implemented in TypeScript
		if (options.loginEmail || options.loginPassword) {
			throw new Error(
				"Browser-based authentication is not implemented in the TypeScript SDK. " +
					"Please provide an access token via nflAuth.",
			);
		}

		// Create security from auth token
		const security = createSecurity(options.nflAuth?.accessToken);

		// Create SDK configuration
		let sdkConfig = new SDKConfiguration({
			security,
			timeoutMs: options.timeoutMs,
			customAuthInfo: options.nflAuth,
		});

		// Initialize hooks
		const hooks = new SDKHooks();
		sdkConfig = hooks.sdkInit(sdkConfig);

		// Call parent constructor
		super(sdkConfig, undefined);
	}

	/**
	 * Game schedules, scores, and details from the regular API.
	 */
	get games(): Games {
		if (!this._games) {
			this._games = new Games(this.sdkConfiguration, this);
		}
		return this._games;
	}

	// Add other sub-SDK getters as they are implemented:
	// get rosters(): Rosters { ... }
	// get standings(): Standings { ... }
	// get stats(): StatsSDK { ... }
	// get betting(): Betting { ... }
	// get ngs(): NextGenStats { ... }

	/**
	 * Close the client and release resources.
	 *
	 * @example
	 * ```typescript
	 * const nfl = new GriddyNFL({ nflAuth: { accessToken: 'token' } });
	 * try {
	 *   const games = await nfl.games.getGames(2024, 'REG', 1);
	 * } finally {
	 *   nfl.close();
	 * }
	 * ```
	 */
	close(): void {
		closeClients(
			this.sdkConfiguration,
			this.sdkConfiguration.client,
			this.sdkConfiguration.clientSupplied,
			this.sdkConfiguration.asyncClient,
			this.sdkConfiguration.asyncClientSupplied,
		);
	}
}

// Re-export types for convenience
export type { NFLAuth as AuthInfo };
export type { Security } from "./models/entities/security";
