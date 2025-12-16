/**
 * Constants for NFL SDK error codes.
 *
 * These define the expected error status codes for different endpoint types.
 */

/**
 * Error codes for collection endpoints (no 404 since empty collection is valid).
 */
export const COLLECTION_ERROR_CODES = ['400', '401', '4XX', '500', '5XX'];

/**
 * Error codes for resource endpoints (includes 404 for not found).
 */
export const RESOURCE_ERROR_CODES = ['400', '401', '404', '4XX', '500', '5XX'];

/**
 * Error codes for stats endpoints.
 */
export const STATS_ERROR_CODES = ['400', '401', '403', '4XX', '500', '5XX'];

/**
 * Error codes for secured resource endpoints.
 */
export const SECURED_RESOURCE_ERROR_CODES = [
  '400',
  '401',
  '403',
  '404',
  '4XX',
  '500',
  '5XX',
];

/**
 * Default status codes that trigger retries.
 */
export const RETRY_STATUS_CODES = ['429', '500', '502', '503', '504'];

/**
 * Check if a status code matches any of the error codes.
 * Supports wildcards like '4XX' and '5XX'.
 */
export function matchStatusCodes(
  errorCodes: string[],
  statusCode: number
): boolean {
  const statusStr = statusCode.toString();

  for (const code of errorCodes) {
    if (code === statusStr) {
      return true;
    }
    // Handle wildcards like '4XX', '5XX'
    if (code.endsWith('XX')) {
      const prefix = code.charAt(0);
      if (statusStr.charAt(0) === prefix) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Check if response matches status code and content type.
 */
export function matchResponse(
  response: Response,
  statusCodes: string | string[],
  contentType: string
): boolean {
  const codes = Array.isArray(statusCodes) ? statusCodes : [statusCodes];

  if (!matchStatusCodes(codes, response.status)) {
    return false;
  }

  if (contentType === '*') {
    return true;
  }

  const responseContentType = response.headers.get('content-type') ?? '';
  return responseContentType.includes(contentType);
}
