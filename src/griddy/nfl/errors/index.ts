/**
 * NFL SDK error classes.
 */

/**
 * Base error for all NFL SDK errors.
 */
export class GriddyNFLError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GriddyNFLError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

/**
 * Default error for NFL SDK API errors.
 */
export class GriddyNFLDefaultError extends GriddyNFLError {
  /** HTTP response, if available */
  readonly response: Response | null;
  /** Response body text, if available */
  readonly responseText: string | null;
  /** HTTP status code */
  readonly statusCode: number | null;

  constructor(
    message: string,
    response?: Response | null,
    responseText?: string | null
  ) {
    super(message);
    this.name = 'GriddyNFLDefaultError';
    this.response = response ?? null;
    this.responseText = responseText ?? null;
    this.statusCode = response?.status ?? null;
  }
}

/**
 * Error when no response is received from the API.
 */
export class NoResponseError extends GriddyNFLError {
  constructor(message: string = 'No response received') {
    super(message);
    this.name = 'NoResponseError';
  }
}

/**
 * Error when response validation fails.
 */
export class ResponseValidationError extends GriddyNFLError {
  /** The response that failed validation */
  readonly response: Response | null;
  /** The validation errors */
  readonly validationErrors: unknown[];

  constructor(
    message: string,
    response?: Response | null,
    validationErrors?: unknown[]
  ) {
    super(message);
    this.name = 'ResponseValidationError';
    this.response = response ?? null;
    this.validationErrors = validationErrors ?? [];
  }
}
