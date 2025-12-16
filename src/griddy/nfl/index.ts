/**
 * NFL SDK module exports.
 */

// Main SDK class
export { GriddyNFL, type GriddyNFLOptions, type NFLAuth, type AuthInfo } from './sdk';

// Configuration
export {
  SDKConfiguration,
  SERVERS,
  type ServerType,
  type HttpClient,
  type AsyncHttpClient,
  type Logger,
  type SDKConfigurationOptions,
  VERSION,
  USER_AGENT,
} from './sdkConfiguration';

// Base SDK
export { BaseSDK, type EndpointConfig } from './baseSdk';

// Types
export {
  UNSET,
  type Unset,
  type OptionalNullable,
  type Nullable,
  type RetryConfig,
  type HttpMethod,
  type RequestOptions,
  DEFAULT_RETRY_CONFIG,
  createRetryConfig,
  isUnset,
} from './types';

// Models
export * from './models';

// Errors
export {
  GriddyNFLError,
  GriddyNFLDefaultError,
  NoResponseError,
  ResponseValidationError,
} from './errors';

// Constants
export {
  COLLECTION_ERROR_CODES,
  RESOURCE_ERROR_CODES,
  STATS_ERROR_CODES,
  SECURED_RESOURCE_ERROR_CODES,
  RETRY_STATUS_CODES,
  matchStatusCodes,
  matchResponse,
} from './_constants';

// Hooks
export {
  SDKHooks,
  createSDKHooks,
  type HookContext,
  type BeforeRequestContext,
  type AfterSuccessContext,
  type AfterErrorContext,
  type SDKInitHook,
  type BeforeRequestHook,
  type AfterSuccessHook,
  type AfterErrorHook,
  type Hooks,
} from './_hooks';

// Endpoints
export { Games } from './endpoints/regular/football/games';
