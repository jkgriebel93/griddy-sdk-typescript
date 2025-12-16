/**
 * Core module exports for Griddy SDK.
 */

// Exceptions
export {
  GriddyError,
  APIError,
  RateLimitError,
  NotFoundError,
  AuthenticationError,
  ValidationError,
  type ResponseData,
} from './exceptions';

// Base client
export { BaseClient, type BaseClientOptions, type RequestConfig } from './baseClient';

// Models
export {
  type Game,
  type Team,
  type Player,
  type PlayerStats,
  type APIResponse,
  type Nullable,
  type OptionalNullable,
  type Unset,
  UNSET,
  isUnset,
  valueOrDefault,
} from './models';

// Utils
export {
  withRateLimitRetry,
  sleep,
  parseDate,
  cleanText,
  safeInt,
  safeFloat,
  buildUrl,
  templateUrl,
  removeSuffix,
  type Cookie,
  isCookieExpired,
  cookieMatchesDomain,
  cookieMatchesPath,
  cookiesToDict,
  cookiesToHeader,
  deepClone,
  isPlainObject,
} from './utils';
