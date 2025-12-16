/**
 * Type definitions for NFL SDK.
 */

/**
 * Sentinel value for unset optional parameters.
 */
export const UNSET = Symbol('UNSET');
export type Unset = typeof UNSET;

/**
 * Check if a value is the UNSET sentinel.
 */
export function isUnset(value: unknown): value is Unset {
  return value === UNSET;
}

/**
 * Type for optional parameters that can be unset.
 */
export type OptionalNullable<T> = T | null | Unset;

/**
 * Type for nullable values.
 */
export type Nullable<T> = T | null;

/**
 * Flexible enum types for unrecognized values.
 */
export type UnrecognizedInt = number;
export type UnrecognizedStr = string;

/**
 * HTTP method types.
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**
 * Request options for HTTP calls.
 */
export interface RequestOptions {
  /** Request timeout in milliseconds */
  timeoutMs?: number;
  /** Additional HTTP headers */
  headers?: Record<string, string>;
  /** Query parameters */
  params?: Record<string, unknown>;
}

/**
 * Retry configuration.
 */
export interface RetryConfig {
  /** Maximum number of retries */
  maxRetries: number;
  /** Initial delay in milliseconds */
  initialDelayMs: number;
  /** Maximum delay in milliseconds */
  maxDelayMs: number;
  /** Exponential backoff multiplier */
  backoffMultiplier: number;
  /** Status codes that should trigger a retry */
  retryStatusCodes: number[];
}

/**
 * Default retry configuration.
 */
export const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 3,
  initialDelayMs: 1000,
  maxDelayMs: 30000,
  backoffMultiplier: 2,
  retryStatusCodes: [429, 500, 502, 503, 504],
};

/**
 * Create retry configuration with overrides.
 */
export function createRetryConfig(
  overrides: Partial<RetryConfig>
): RetryConfig {
  return {
    ...DEFAULT_RETRY_CONFIG,
    ...overrides,
  };
}

/**
 * Field metadata for request parameters.
 */
export interface FieldMetadata {
  /** Parameter location (path, query, header, body) */
  location: 'path' | 'query' | 'header' | 'body';
  /** Parameter name in the API */
  apiName: string;
  /** Whether the parameter is required */
  required: boolean;
  /** Default value */
  defaultValue?: unknown;
}

/**
 * Path parameter metadata.
 */
export interface PathParamMetadata extends FieldMetadata {
  location: 'path';
  /** Style of path parameter (simple, label, matrix) */
  style?: 'simple' | 'label' | 'matrix';
  /** Whether to explode arrays */
  explode?: boolean;
}

/**
 * Query parameter metadata.
 */
export interface QueryParamMetadata extends FieldMetadata {
  location: 'query';
  /** Style of query parameter (form, spaceDelimited, pipeDelimited, deepObject) */
  style?: 'form' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject';
  /** Whether to explode arrays */
  explode?: boolean;
}

/**
 * Header parameter metadata.
 */
export interface HeaderParamMetadata extends FieldMetadata {
  location: 'header';
}

/**
 * Security metadata for authentication.
 */
export interface SecurityMetadata {
  /** Security scheme type */
  schemeType: 'http' | 'apiKey' | 'oauth2' | 'openIdConnect';
  /** Security scheme sub-type (e.g., 'bearer' for HTTP) */
  subType?: string;
  /** Field name for the credential */
  fieldName: string;
  /** Location of the credential (header, query, cookie) */
  in: 'header' | 'query' | 'cookie';
}

/**
 * Serialized request body.
 */
export interface SerializedRequestBody {
  /** Content bytes/string */
  content?: string | Uint8Array;
  /** Form data */
  data?: Record<string, unknown>;
  /** Files for multipart upload */
  files?: Record<string, Blob | File>;
  /** Media type */
  mediaType?: string;
}

/**
 * Response handler type.
 */
export type ResponseHandler<T> = (response: Response) => Promise<T>;
