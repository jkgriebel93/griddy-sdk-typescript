/**
 * Configuration settings for the Griddy SDK.
 *
 * Settings can be configured via environment variables or programmatically.
 */

/**
 * Get environment variable with optional default.
 */
function getEnv(key: string, defaultValue?: string): string | undefined {
	// Works in Node.js
	if (typeof process !== "undefined" && process.env) {
		return process.env[key] ?? defaultValue;
	}
	// For browser environments, you might want to handle this differently
	return defaultValue;
}

/**
 * NFL API configuration settings.
 */
export interface NFLSettings {
	/** NFL API key */
	apiKey: string | undefined;
	/** SDK build version */
	sdkBuild: string;
	/** Client key for authentication */
	clientKey: string | undefined;
	/** Client secret for authentication */
	clientSecret: string | undefined;
	/** Authentication URL */
	authUrl: string;
	/** Account info URL */
	accountUrl: string;
	/** Token URL */
	tokenUrl: string;
	/** Base API URL for football endpoints */
	baseApiUrl: string;
	/** Pro API base URL */
	proApiBaseUrl: string;
	/** Login email for browser-based auth */
	loginEmail: string | undefined;
	/** Login password for browser-based auth */
	loginPassword: string | undefined;
}

/**
 * Default NFL settings, loaded from environment variables.
 */
export const NFL: NFLSettings = {
	apiKey: getEnv("NFL_API_KEY"),
	sdkBuild: getEnv("NFL_SDK_BUILD", "15170") ?? "15170",
	clientKey: getEnv("NFL_CLIENT_KEY"),
	clientSecret: getEnv("NFL_CLIENT_SECRET"),
	authUrl: "https://auth-id.nfl.com/",
	accountUrl: "https://auth-id.nfl.com/accounts.getAccountInfo",
	tokenUrl: "https://api.nfl.com/identity/v3/token",
	baseApiUrl: "https://api.nfl.com/football/v2/",
	proApiBaseUrl: "https://pro.nfl.com/api/",
	loginEmail: getEnv("NFL_LOGIN_EMAIL"),
	loginPassword: getEnv("NFL_LOGIN_PASSWORD"),
};

/**
 * API server URLs for different NFL API categories.
 */
export const SERVERS = {
	regular: "https://api.nfl.com",
	pro: "https://pro.nfl.com",
	ngs: "https://nextgenstats.nfl.com",
} as const;

export type ServerType = keyof typeof SERVERS;

/**
 * Create custom NFL settings by merging with defaults.
 */
export function createNFLSettings(
	overrides: Partial<NFLSettings>,
): NFLSettings {
	return {
		...NFL,
		...overrides,
	};
}
