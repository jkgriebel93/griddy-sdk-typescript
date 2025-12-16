/**
 * Utility functions for Griddy SDK.
 */

import { RateLimitError } from './exceptions';

/**
 * Decorator/wrapper to retry function calls on rate limit errors.
 *
 * @param fn - The async function to wrap
 * @param maxRetries - Maximum number of retry attempts
 * @param backoffFactor - Factor for exponential backoff
 * @returns Wrapped function that retries on rate limit errors
 */
export function withRateLimitRetry<T extends unknown[], R>(
  fn: (...args: T) => Promise<R>,
  maxRetries: number = 3,
  backoffFactor: number = 1.0
): (...args: T) => Promise<R> {
  return async (...args: T): Promise<R> => {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await fn(...args);
      } catch (error) {
        if (error instanceof RateLimitError) {
          if (attempt === maxRetries) {
            throw error;
          }

          // Calculate backoff time
          let backoffTime = backoffFactor * Math.pow(2, attempt);
          if (error.retryAfter !== null) {
            backoffTime = Math.max(backoffTime, error.retryAfter);
          }

          await sleep(backoffTime * 1000);
        } else {
          throw error;
        }
      }
    }

    // This should never be reached
    return fn(...args);
  };
}

/**
 * Sleep for a specified number of milliseconds.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Parse date string into Date object.
 *
 * @param dateStr - Date string in various formats
 * @returns Parsed Date object or null
 */
export function parseDate(dateStr: string | null | undefined): Date | null {
  if (!dateStr) {
    return null;
  }

  // Try parsing as ISO 8601 first (most common)
  const isoDate = new Date(dateStr);
  if (!isNaN(isoDate.getTime())) {
    return isoDate;
  }

  // Common date formats to try
  const formats = [
    // MM/DD/YYYY
    /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,
    // MM/DD/YYYY HH:MM:SS
    /^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2}):(\d{2})$/,
  ];

  for (const regex of formats) {
    const match = dateStr.match(regex);
    if (match) {
      if (match.length === 4) {
        // MM/DD/YYYY
        const [, month, day, year] = match;
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      } else if (match.length === 7) {
        // MM/DD/YYYY HH:MM:SS
        const [, month, day, year, hour, minute, second] = match;
        return new Date(
          parseInt(year),
          parseInt(month) - 1,
          parseInt(day),
          parseInt(hour),
          parseInt(minute),
          parseInt(second)
        );
      }
    }
  }

  return null;
}

/**
 * Clean and normalize text data.
 *
 * @param text - Text to clean
 * @returns Cleaned text or null
 */
export function cleanText(text: string | null | undefined): string | null {
  if (!text) {
    return null;
  }

  const cleaned = text.trim();
  if (!cleaned) {
    return null;
  }

  return cleaned;
}

/**
 * Safely convert value to integer.
 *
 * @param value - Value to convert
 * @returns Integer value or null
 */
export function safeInt(value: unknown): number | null {
  if (value === null || value === undefined) {
    return null;
  }

  const num = Number(value);
  if (isNaN(num)) {
    return null;
  }

  return Math.floor(num);
}

/**
 * Safely convert value to float.
 *
 * @param value - Value to convert
 * @returns Float value or null
 */
export function safeFloat(value: unknown): number | null {
  if (value === null || value === undefined) {
    return null;
  }

  const num = Number(value);
  if (isNaN(num)) {
    return null;
  }

  return num;
}

/**
 * Build URL from base URL, path, and parameters.
 *
 * @param baseUrl - Base URL
 * @param path - URL path
 * @param params - Query parameters
 * @returns Complete URL
 */
export function buildUrl(
  baseUrl: string,
  path: string,
  params?: Record<string, unknown> | null
): string {
  // Ensure baseUrl doesn't end with slash and path starts without slash
  const cleanBaseUrl = baseUrl.replace(/\/+$/, '');
  const cleanPath = path.replace(/^\/+/, '');

  let url = cleanPath ? `${cleanBaseUrl}/${cleanPath}` : cleanBaseUrl;

  if (params) {
    // Filter out null/undefined values
    const filteredParams: Record<string, string> = {};
    for (const [key, value] of Object.entries(params)) {
      if (value !== null && value !== undefined) {
        filteredParams[key] = String(value);
      }
    }

    if (Object.keys(filteredParams).length > 0) {
      const searchParams = new URLSearchParams(filteredParams);
      url += `?${searchParams.toString()}`;
    }
  }

  return url;
}

/**
 * Template URL with variables.
 *
 * @param url - URL template with {variable} placeholders
 * @param variables - Variables to substitute
 * @returns URL with variables substituted
 */
export function templateUrl(
  url: string,
  variables: Record<string, string>
): string {
  let result = url;
  for (const [key, value] of Object.entries(variables)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
  }
  return result;
}

/**
 * Remove suffix from string if present.
 */
export function removeSuffix(str: string, suffix: string): string {
  if (str.endsWith(suffix)) {
    return str.slice(0, -suffix.length);
  }
  return str;
}

/**
 * Cookie interface matching the Python Cookie class.
 */
export interface Cookie {
  domain: string;
  path: string;
  secure: boolean;
  expires: number | null;
  name: string;
  value: string;
  httpOnly: boolean;
  includeSubdomains: boolean;
}

/**
 * Check if a cookie is expired.
 */
export function isCookieExpired(cookie: Cookie): boolean {
  if (cookie.expires === null) {
    return false;
  }
  return Date.now() / 1000 > cookie.expires;
}

/**
 * Check if a cookie matches a given domain.
 */
export function cookieMatchesDomain(cookie: Cookie, domain: string): boolean {
  const cookieDomain = cookie.domain.replace(/^\./, '');
  const targetDomain = domain.toLowerCase();

  // Exact match
  if (cookieDomain.toLowerCase() === targetDomain) {
    return true;
  }

  // Subdomain match
  if (cookie.domain.startsWith('.') || cookie.includeSubdomains) {
    return targetDomain.endsWith('.' + cookieDomain.toLowerCase());
  }

  return false;
}

/**
 * Check if a cookie matches a given path.
 */
export function cookieMatchesPath(cookie: Cookie, path: string): boolean {
  if (cookie.path === '/') {
    return true;
  }
  return path.startsWith(cookie.path);
}

/**
 * Convert cookies to dictionary format.
 */
export function cookiesToDict(cookies: Cookie[]): Record<string, string> {
  const result: Record<string, string> = {};
  for (const cookie of cookies) {
    result[cookie.name] = cookie.value;
  }
  return result;
}

/**
 * Convert cookies to Cookie header string.
 */
export function cookiesToHeader(cookies: Cookie[]): string {
  if (cookies.length === 0) {
    return '';
  }
  return cookies.map((c) => `${c.name}=${c.value}`).join('; ');
}

/**
 * Deep clone an object.
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Check if a value is a plain object.
 */
export function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    Object.prototype.toString.call(value) === '[object Object]'
  );
}
