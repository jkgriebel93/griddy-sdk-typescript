/**
 * NFL SDK module exports.
 */

// Constants
export {
	COLLECTION_ERROR_CODES,
	matchResponse,
	matchStatusCodes,
	RESOURCE_ERROR_CODES,
	RETRY_STATUS_CODES,
	SECURED_RESOURCE_ERROR_CODES,
	STATS_ERROR_CODES,
} from "./_constants";
// Hooks
export {
	type AfterErrorContext,
	type AfterErrorHook,
	type AfterSuccessContext,
	type AfterSuccessHook,
	type BeforeRequestContext,
	type BeforeRequestHook,
	createSDKHooks,
	type HookContext,
	type Hooks,
	SDKHooks,
	type SDKInitHook,
} from "./_hooks";

// Base SDK
export { BaseSDK, type EndpointConfig } from "./baseSdk";
// Endpoints
export { Games } from "./endpoints/regular/football/games";
// Errors
export {
	GriddyNFLDefaultError,
	GriddyNFLError,
	NoResponseError,
	ResponseValidationError,
} from "./errors";
// Models
export * from "./models";
// Main SDK class
export {
	type AuthInfo,
	GriddyNFL,
	type GriddyNFLOptions,
	type NFLAuth,
} from "./sdk";
// Configuration
export {
	type AsyncHttpClient,
	type HttpClient,
	type Logger,
	SDKConfiguration,
	type SDKConfigurationOptions,
	SERVERS,
	type ServerType,
	USER_AGENT,
	VERSION,
} from "./sdkConfiguration";
// Types
export {
	createRetryConfig,
	DEFAULT_RETRY_CONFIG,
	type HttpMethod,
	isUnset,
	type Nullable,
	type OptionalNullable,
	type RequestOptions,
	type RetryConfig,
	UNSET,
	type Unset,
} from "./types";
