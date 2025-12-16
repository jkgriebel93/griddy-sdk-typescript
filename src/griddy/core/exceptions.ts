/**
 * Custom exceptions for the Griddy SDK.
 *
 * This module defines a hierarchy of exceptions used throughout the Griddy SDK
 * to provide specific error information for different failure scenarios.
 *
 * Exception Hierarchy:
 *   GriddyError (Base)
 *   ├── APIError           - General API request failures
 *   ├── RateLimitError     - Rate limit exceeded (429)
 *   ├── NotFoundError      - Resource not found (404)
 *   ├── AuthenticationError - Authentication failed (401)
 *   └── ValidationError    - Request validation failures
 */

export interface ResponseData {
	[key: string]: unknown;
}

/**
 * Base exception for all Griddy SDK errors.
 *
 * All SDK-specific exceptions inherit from this class, allowing you to
 * catch all SDK errors with a single catch clause.
 */
export class GriddyError extends Error {
	/** Human-readable error description */
	readonly message: string;
	/** HTTP status code from the API response, if applicable */
	readonly statusCode: number | null;
	/** Raw response data from the API, if available */
	readonly responseData: ResponseData;

	constructor(
		message: string,
		statusCode: number | null = null,
		responseData: ResponseData | null = null,
	) {
		super(message);
		this.name = "GriddyError";
		this.message = message;
		this.statusCode = statusCode;
		this.responseData = responseData ?? {};

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

/**
 * Raised when an API request fails.
 *
 * This exception is raised for general API errors, including server errors
 * (5xx status codes) and client errors that don't fit more specific categories.
 */
export class APIError extends GriddyError {
	constructor(
		message: string,
		statusCode: number | null = null,
		responseData: ResponseData | null = null,
	) {
		super(message, statusCode, responseData);
		this.name = "APIError";
	}
}

/**
 * Raised when the API rate limit is exceeded.
 *
 * This exception is raised when the API returns a 429 status code,
 * indicating too many requests have been made in a given time period.
 */
export class RateLimitError extends GriddyError {
	/** Number of seconds to wait before retrying, if provided by the API */
	readonly retryAfter: number | null;

	constructor(
		message: string,
		statusCode: number | null = null,
		responseData: ResponseData | null = null,
		retryAfter: number | null = null,
	) {
		super(message, statusCode, responseData);
		this.name = "RateLimitError";
		this.retryAfter = retryAfter;
	}
}

/**
 * Raised when a requested resource is not found.
 *
 * This exception is raised when the API returns a 404 status code,
 * indicating the requested resource does not exist.
 */
export class NotFoundError extends GriddyError {
	constructor(
		message: string,
		statusCode: number | null = null,
		responseData: ResponseData | null = null,
	) {
		super(message, statusCode, responseData);
		this.name = "NotFoundError";
	}
}

/**
 * Raised when authentication fails.
 *
 * This exception is raised when the API returns a 401 status code,
 * indicating the request lacks valid authentication credentials.
 */
export class AuthenticationError extends GriddyError {
	constructor(
		message: string,
		statusCode: number | null = null,
		responseData: ResponseData | null = null,
	) {
		super(message, statusCode, responseData);
		this.name = "AuthenticationError";
	}
}

/**
 * Raised when request validation fails.
 *
 * This exception is raised when the request parameters fail validation,
 * either client-side or when the API returns a 400 status code.
 */
export class ValidationError extends GriddyError {
	constructor(
		message: string,
		statusCode: number | null = null,
		responseData: ResponseData | null = null,
	) {
		super(message, statusCode, responseData);
		this.name = "ValidationError";
	}
}
