/**
 * Griddy SDK - TypeScript SDK for accessing NFL data.
 *
 * @packageDocumentation
 */

// Core module
export * from "./core";
// NFL SDK
export * from "./nfl";
// Settings
export {
	createNFLSettings,
	NFL,
	type NFLSettings,
	SERVERS,
	type ServerType,
} from "./settings";
