/**
 * Core module exports for Griddy SDK.
 */

// Base client
export {
	BaseClient,
	type BaseClientOptions,
	type RequestConfig,
} from "./baseClient";
// Exceptions
export {
	APIError,
	AuthenticationError,
	GriddyError,
	NotFoundError,
	RateLimitError,
	type ResponseData,
	ValidationError,
} from "./exceptions";

// Models
export {
	type APIResponse,
	type Game,
	isUnset,
	type Nullable,
	type OptionalNullable,
	type Player,
	type PlayerStats,
	type Team,
	UNSET,
	type Unset,
	valueOrDefault,
} from "./models";

// Utils
export {
	buildUrl,
	type Cookie,
	cleanText,
	cookieMatchesDomain,
	cookieMatchesPath,
	cookiesToDict,
	cookiesToHeader,
	deepClone,
	isCookieExpired,
	isPlainObject,
	parseDate,
	removeSuffix,
	safeFloat,
	safeInt,
	sleep,
	templateUrl,
	withRateLimitRetry,
} from "./utils";
