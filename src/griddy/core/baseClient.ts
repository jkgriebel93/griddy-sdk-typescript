/**
 * Base HTTP client for all Griddy SDK modules.
 *
 * This module provides the BaseClient class, which implements common HTTP
 * functionality including rate limiting, automatic retries, and error handling.
 */

import {
  APIError,
  AuthenticationError,
  NotFoundError,
  RateLimitError,
  ResponseData,
} from './exceptions';
import { withRateLimitRetry, sleep } from './utils';

export interface RequestConfig {
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
  timeout?: number;
}

export interface BaseClientOptions {
  baseUrl: string;
  timeout?: number;
  maxRetries?: number;
  rateLimitDelay?: number;
  headers?: Record<string, string>;
}

/**
 * Base HTTP client with common functionality for all data source clients.
 *
 * This class provides a foundation for building API clients with built-in
 * support for rate limiting, automatic retries on transient failures, and
 * consistent error handling.
 */
export class BaseClient {
  readonly baseUrl: string;
  readonly timeout: number;
  readonly rateLimitDelay: number;
  private lastRequestTime: number = 0;
  private defaultHeaders: Record<string, string>;

  constructor(options: BaseClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/+$/, '');
    this.timeout = options.timeout ?? 30000;
    this.rateLimitDelay = options.rateLimitDelay ?? 1.0;

    this.defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.headers,
    };
  }

  /**
   * Enforce rate limiting between requests.
   */
  private async enforceRateLimit(): Promise<void> {
    if (this.rateLimitDelay > 0) {
      const timeSinceLast = (Date.now() - this.lastRequestTime) / 1000;
      if (timeSinceLast < this.rateLimitDelay) {
        await sleep((this.rateLimitDelay - timeSinceLast) * 1000);
      }
    }
    this.lastRequestTime = Date.now();
  }

  /**
   * Handle HTTP response and raise appropriate exceptions.
   */
  private async handleResponse(
    response: Response
  ): Promise<Record<string, unknown> | unknown[]> {
    let responseData: ResponseData = {};

    try {
      const text = await response.text();
      if (text) {
        responseData = JSON.parse(text);
      }
    } catch {
      responseData = { message: await response.text().catch(() => '') };
    }

    if (response.status === 200) {
      return responseData as Record<string, unknown> | unknown[];
    } else if (response.status === 404) {
      throw new NotFoundError(
        `Resource not found: ${response.url}`,
        response.status,
        responseData
      );
    } else if (response.status === 401) {
      throw new AuthenticationError(
        'Authentication failed',
        response.status,
        responseData
      );
    } else if (response.status === 429) {
      let retryAfter: number | null = null;
      const retryAfterHeader = response.headers.get('Retry-After');
      if (retryAfterHeader) {
        const parsed = parseInt(retryAfterHeader, 10);
        if (!isNaN(parsed)) {
          retryAfter = parsed;
        }
      }

      throw new RateLimitError(
        'Rate limit exceeded',
        response.status,
        responseData,
        retryAfter
      );
    } else {
      const errorMessage =
        (responseData as Record<string, unknown>).message?.toString() ||
        `HTTP ${response.status}`;
      throw new APIError(errorMessage, response.status, responseData);
    }
  }

  /**
   * Build full URL from endpoint.
   */
  private buildUrl(endpoint: string): string {
    const cleanEndpoint = endpoint.replace(/^\/+/, '');
    return `${this.baseUrl}/${cleanEndpoint}`;
  }

  /**
   * Make a GET request to the API.
   */
  async get(
    endpoint: string,
    config?: RequestConfig
  ): Promise<Record<string, unknown> | unknown[]> {
    await this.enforceRateLimit();

    let url = this.buildUrl(endpoint);

    if (config?.params) {
      const filteredParams: Record<string, string> = {};
      for (const [key, value] of Object.entries(config.params)) {
        if (value !== null && value !== undefined) {
          filteredParams[key] = String(value);
        }
      }
      if (Object.keys(filteredParams).length > 0) {
        const searchParams = new URLSearchParams(filteredParams);
        url += `?${searchParams.toString()}`;
      }
    }

    const headers = {
      ...this.defaultHeaders,
      ...config?.headers,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      config?.timeout ?? this.timeout
    );

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers,
        signal: controller.signal,
      });

      return this.handleResponse(response);
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /**
   * Make a POST request to the API.
   */
  async post(
    endpoint: string,
    data?: Record<string, unknown>,
    config?: RequestConfig
  ): Promise<Record<string, unknown>> {
    await this.enforceRateLimit();

    const url = this.buildUrl(endpoint);

    const headers = {
      ...this.defaultHeaders,
      ...config?.headers,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      config?.timeout ?? this.timeout
    );

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: data ? JSON.stringify(data) : undefined,
        signal: controller.signal,
      });

      return (await this.handleResponse(response)) as Record<string, unknown>;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /**
   * Create a GET request with rate limit retry wrapper.
   */
  getWithRetry(
    maxRetries: number = 3,
    backoffFactor: number = 1.0
  ): (
    endpoint: string,
    config?: RequestConfig
  ) => Promise<Record<string, unknown> | unknown[]> {
    return withRateLimitRetry(this.get.bind(this), maxRetries, backoffFactor);
  }

  /**
   * Create a POST request with rate limit retry wrapper.
   */
  postWithRetry(
    maxRetries: number = 3,
    backoffFactor: number = 1.0
  ): (
    endpoint: string,
    data?: Record<string, unknown>,
    config?: RequestConfig
  ) => Promise<Record<string, unknown>> {
    return withRateLimitRetry(this.post.bind(this), maxRetries, backoffFactor);
  }
}
