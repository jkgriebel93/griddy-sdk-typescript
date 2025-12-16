/**
 * Base SDK implementation for NFL SDK.
 *
 * Provides the foundation for all endpoint implementations with
 * request building, execution, and response handling.
 */

import { SDKConfiguration, type HttpClient } from './sdkConfiguration';
import { SDKHooks } from './_hooks';
import type {
  HookContext,
  BeforeRequestContext,
  AfterSuccessContext,
  AfterErrorContext,
} from './_hooks';
import {
  GriddyNFLDefaultError,
  NoResponseError,
} from './errors';
import { matchResponse, matchStatusCodes } from './_constants';
import type { RetryConfig, SerializedRequestBody, OptionalNullable, Unset } from './types';
import { UNSET, isUnset } from './types';
import { templateUrl, removeSuffix } from '../core';
import type { Security } from './models/entities/security';
import type { ParamMetadata } from './models/requests';

/**
 * Configuration for an API endpoint.
 */
export interface EndpointConfig<T = unknown> {
  /** HTTP method */
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  /** URL path with {param} placeholders */
  path: string;
  /** Operation identifier */
  operationId: string;
  /** Request parameters */
  request: Record<string, unknown>;
  /** Request parameter metadata */
  requestMeta?: Record<string, ParamMetadata>;
  /** Response type constructor (for documentation) */
  responseType?: string;
  /** Expected error status codes */
  errorStatusCodes: string[];
  /** Whether request body is required */
  requestBodyRequired?: boolean;
  /** Whether request has path parameters */
  requestHasPathParams?: boolean;
  /** Whether request has query parameters */
  requestHasQueryParams?: boolean;
  /** Server URL override */
  serverUrl?: string;
  /** Timeout in milliseconds */
  timeoutMs?: number;
  /** Additional HTTP headers */
  httpHeaders?: Record<string, string>;
  /** Retry configuration */
  retries?: RetryConfig | Unset;
  /** Return raw JSON instead of typed response */
  returnRawJson?: boolean;
  /** Body serializer function */
  getSerializedBody?: () => SerializedRequestBody | null;
  /** User agent header name */
  userAgentHeader?: string;
  /** Accept header value */
  acceptHeaderValue?: string;
}

/**
 * Base SDK class providing common functionality for all endpoint classes.
 */
export class BaseSDK {
  protected sdkConfiguration: SDKConfiguration;
  protected parentRef: object | null = null;

  constructor(sdkConfig: SDKConfiguration, parentRef?: object | null) {
    this.sdkConfiguration = sdkConfig;
    this.parentRef = parentRef ?? null;
  }

  /**
   * Get the URL with template variables.
   */
  protected getUrl(
    baseUrl: string | null,
    urlVariables: Record<string, string> | null
  ): string {
    const [sdkUrl, sdkVariables] = this.sdkConfiguration.getServerDetails();

    if (!baseUrl) {
      baseUrl = sdkUrl;
    }

    if (!urlVariables) {
      urlVariables = sdkVariables;
    }

    return templateUrl(baseUrl, urlVariables);
  }

  /**
   * Resolve the base URL for a request.
   */
  protected resolveBaseUrl(
    serverUrl?: string,
    urlVariables?: Record<string, string>
  ): string {
    if (serverUrl) {
      return serverUrl;
    }
    return this.getUrl(null, urlVariables ?? null);
  }

  /**
   * Resolve timeout, falling back to SDK configuration.
   */
  protected resolveTimeout(timeoutMs?: number): number | null {
    if (timeoutMs !== undefined) {
      return timeoutMs;
    }
    return this.sdkConfiguration.timeoutMs;
  }

  /**
   * Resolve retry configuration.
   */
  protected resolveRetryConfig(
    retries: RetryConfig | Unset | undefined,
    retryStatusCodes?: string[]
  ): { config: RetryConfig; statusCodes: string[] } | null {
    const defaultStatusCodes = ['429', '500', '502', '503', '504'];
    const statusCodes = retryStatusCodes ?? defaultStatusCodes;

    if (isUnset(retries)) {
      if (!isUnset(this.sdkConfiguration.retryConfig)) {
        retries = this.sdkConfiguration.retryConfig;
      }
    }

    if (retries && !isUnset(retries)) {
      return { config: retries, statusCodes };
    }

    return null;
  }

  /**
   * Create a hook context for request execution.
   */
  protected createHookContext(
    operationId: string,
    baseUrl: string
  ): HookContext {
    return {
      config: this.sdkConfiguration,
      baseUrl: baseUrl || '',
      operationId,
      oauth2Scopes: [],
      securitySource: this.sdkConfiguration.security,
    };
  }

  /**
   * Generate URL with path parameters substituted.
   */
  protected generateUrl(
    baseUrl: string,
    path: string,
    request: Record<string, unknown> | null,
    requestMeta?: Record<string, ParamMetadata>
  ): string {
    let fullPath = path;

    // Substitute path parameters
    if (request && requestMeta) {
      for (const [key, meta] of Object.entries(requestMeta)) {
        if (meta.location === 'path' && key in request) {
          const value = request[key];
          if (value !== undefined && value !== null) {
            fullPath = fullPath.replace(
              new RegExp(`\\{${meta.apiName}\\}`, 'g'),
              encodeURIComponent(String(value))
            );
          }
        }
      }
    }

    return `${removeSuffix(baseUrl, '/')}${fullPath}`;
  }

  /**
   * Get query parameters from request.
   */
  protected getQueryParams(
    request: Record<string, unknown> | null,
    requestMeta?: Record<string, ParamMetadata>
  ): Record<string, string> {
    const params: Record<string, string> = {};

    if (!request || !requestMeta) {
      return params;
    }

    for (const [key, meta] of Object.entries(requestMeta)) {
      if (meta.location === 'query' && key in request) {
        const value = request[key];
        if (value !== undefined && value !== null) {
          params[meta.apiName] = String(value);
        }
      }
    }

    return params;
  }

  /**
   * Get headers from request.
   */
  protected getHeaders(
    request: Record<string, unknown> | null,
    requestMeta?: Record<string, ParamMetadata>
  ): Record<string, string> {
    const headers: Record<string, string> = {};

    if (!request || !requestMeta) {
      return headers;
    }

    for (const [key, meta] of Object.entries(requestMeta)) {
      if (meta.location === 'header' && key in request) {
        const value = request[key];
        if (value !== undefined && value !== null) {
          headers[meta.apiName] = String(value);
        }
      }
    }

    return headers;
  }

  /**
   * Get security headers and query params.
   */
  protected getSecurityParams(
    security: Security | (() => Security) | null
  ): { headers: Record<string, string>; queryParams: Record<string, string> } {
    const headers: Record<string, string> = {};
    const queryParams: Record<string, string> = {};

    if (!security) {
      return { headers, queryParams };
    }

    const securityObj = typeof security === 'function' ? security() : security;

    if (securityObj.nflAuth) {
      headers['Authorization'] = `Bearer ${securityObj.nflAuth}`;
    }

    return { headers, queryParams };
  }

  /**
   * Build an HTTP request.
   */
  protected buildRequest(config: EndpointConfig): Request {
    const baseUrl = this.resolveBaseUrl(config.serverUrl);
    const timeout = this.resolveTimeout(config.timeoutMs);

    // Generate URL with path params
    const url = this.generateUrl(
      baseUrl,
      config.path,
      config.requestHasPathParams ? config.request : null,
      config.requestMeta
    );

    // Get query params
    const queryParams = config.requestHasQueryParams
      ? this.getQueryParams(config.request, config.requestMeta)
      : {};

    // Get headers from request
    const requestHeaders = this.getHeaders(config.request, config.requestMeta);

    // Get security headers/params
    const { headers: securityHeaders, queryParams: securityQueryParams } =
      this.getSecurityParams(this.sdkConfiguration.security);

    // Combine all headers
    const headers: Record<string, string> = {
      Accept: config.acceptHeaderValue ?? 'application/json',
      'User-Agent': this.sdkConfiguration.userAgent,
      ...requestHeaders,
      ...securityHeaders,
      ...config.httpHeaders,
    };

    // Combine all query params
    const allQueryParams = { ...queryParams, ...securityQueryParams };

    // Build URL with query string
    let finalUrl = url;
    const queryString = new URLSearchParams(allQueryParams).toString();
    if (queryString) {
      finalUrl += `?${queryString}`;
    }

    // Build request body if needed
    let body: string | undefined;
    if (config.getSerializedBody) {
      const serialized = config.getSerializedBody();
      if (serialized?.content) {
        body =
          typeof serialized.content === 'string'
            ? serialized.content
            : new TextDecoder().decode(serialized.content);
        if (serialized.mediaType) {
          headers['Content-Type'] = serialized.mediaType;
        }
      }
    }

    return new Request(finalUrl, {
      method: config.method,
      headers,
      body,
    });
  }

  /**
   * Execute an HTTP request with hooks and retries.
   */
  protected async doRequest(
    hookCtx: HookContext,
    request: Request,
    errorStatusCodes: string[],
    retryConfig?: { config: RetryConfig; statusCodes: string[] } | null
  ): Promise<Response> {
    const hooks = this.sdkConfiguration.hooks;
    const logger = this.sdkConfiguration.debugLogger;

    const execute = async (): Promise<Response> => {
      let response: Response | null = null;

      try {
        // Run before-request hooks
        let req = request;
        if (hooks) {
          req = await hooks.beforeRequest(hookCtx as BeforeRequestContext, request);
        }

        logger.debug(
          `Request: ${req.method} ${req.url}`,
          Object.fromEntries(req.headers.entries())
        );

        // Execute the request
        response = await fetch(req);
      } catch (error) {
        // Run after-error hooks
        if (hooks) {
          const result = await hooks.afterError(
            hookCtx as AfterErrorContext,
            null,
            error as Error
          );
          if (result.error) {
            logger.debug('Request Exception', result.error);
            throw result.error;
          }
        } else {
          throw error;
        }
      }

      if (!response) {
        logger.debug('Raising no response SDK error');
        throw new NoResponseError('No response received');
      }

      logger.debug(
        `Response: ${response.status} ${response.url}`,
        Object.fromEntries(response.headers.entries())
      );

      // Check for error status codes
      if (matchStatusCodes(errorStatusCodes, response.status)) {
        if (hooks) {
          const result = await hooks.afterError(
            hookCtx as AfterErrorContext,
            response,
            null
          );
          if (result.error) {
            logger.debug('Request Exception', result.error);
            throw result.error;
          }
          if (result.response) {
            response = result.response;
          } else {
            logger.debug('Raising unexpected SDK error');
            throw new GriddyNFLDefaultError('Unexpected error occurred', response);
          }
        }
      }

      return response;
    };

    // Execute with retries if configured
    if (retryConfig) {
      return this.executeWithRetry(execute, retryConfig);
    }

    const response = await execute();

    // Run after-success hooks
    if (this.sdkConfiguration.hooks && !matchStatusCodes(errorStatusCodes, response.status)) {
      return this.sdkConfiguration.hooks.afterSuccess(
        hookCtx as AfterSuccessContext,
        response
      );
    }

    return response;
  }

  /**
   * Execute with retry logic.
   */
  private async executeWithRetry(
    fn: () => Promise<Response>,
    retryConfig: { config: RetryConfig; statusCodes: string[] }
  ): Promise<Response> {
    const { config, statusCodes } = retryConfig;
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
      try {
        const response = await fn();

        // Check if we should retry based on status code
        if (
          attempt < config.maxRetries &&
          matchStatusCodes(statusCodes, response.status)
        ) {
          const delay = Math.min(
            config.initialDelayMs * Math.pow(config.backoffMultiplier, attempt),
            config.maxDelayMs
          );
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        return response;
      } catch (error) {
        lastError = error as Error;
        if (attempt === config.maxRetries) {
          throw error;
        }

        const delay = Math.min(
          config.initialDelayMs * Math.pow(config.backoffMultiplier, attempt),
          config.maxDelayMs
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    throw lastError ?? new Error('Retry failed');
  }

  /**
   * Handle JSON response with error handling.
   */
  protected async handleJsonResponse<T>(
    response: Response,
    errorStatusCodes: string[]
  ): Promise<T> {
    if (matchResponse(response, '200', 'application/json')) {
      return (await response.json()) as T;
    }

    // Handle client errors (4XX)
    const clientErrors = errorStatusCodes.filter((code) => code.startsWith('4'));
    if (clientErrors.length > 0 && matchResponse(response, clientErrors, '*')) {
      const text = await response.text();
      throw new GriddyNFLDefaultError('API error occurred', response, text);
    }

    // Handle server errors (5XX)
    const serverErrors = errorStatusCodes.filter((code) => code.startsWith('5'));
    if (serverErrors.length > 0 && matchResponse(response, serverErrors, '*')) {
      const text = await response.text();
      throw new GriddyNFLDefaultError('API error occurred', response, text);
    }

    throw new GriddyNFLDefaultError('Unexpected response received', response);
  }

  /**
   * Execute an endpoint and return the response.
   */
  protected async executeEndpoint<T>(config: EndpointConfig<T>): Promise<T> {
    const baseUrl = this.resolveBaseUrl(config.serverUrl);
    const request = this.buildRequest(config);
    const retryConfig = this.resolveRetryConfig(config.retries);

    const response = await this.doRequest(
      this.createHookContext(config.operationId, baseUrl),
      request,
      config.errorStatusCodes,
      retryConfig
    );

    // Return raw JSON if specified
    if (config.returnRawJson) {
      if (matchResponse(response, '200', 'application/json')) {
        return (await response.json()) as T;
      }
    }

    return this.handleJsonResponse<T>(response, config.errorStatusCodes);
  }
}
