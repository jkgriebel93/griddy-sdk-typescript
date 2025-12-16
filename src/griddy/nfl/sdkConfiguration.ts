/**
 * SDK Configuration for the NFL SDK.
 */

import type { RetryConfig, OptionalNullable, Unset } from './types';
import { UNSET, isUnset } from './types';
import type { SDKHooks } from './_hooks';
import type { Security } from './models/entities/security';

/**
 * Server URLs for different API categories.
 */
export const SERVERS = {
  regular: 'https://api.nfl.com',
  pro: 'https://pro.nfl.com',
  ngs: 'https://nextgenstats.nfl.com',
} as const;

export type ServerType = keyof typeof SERVERS;

/**
 * HTTP client interface for making requests.
 */
export interface HttpClient {
  /**
   * Build an HTTP request.
   */
  buildRequest(
    method: string,
    url: string,
    options?: {
      params?: Record<string, unknown>;
      content?: string | Uint8Array;
      data?: Record<string, unknown>;
      files?: Record<string, Blob | File>;
      headers?: Record<string, string>;
      timeout?: number;
    }
  ): Request;

  /**
   * Send an HTTP request.
   */
  send(request: Request, options?: { stream?: boolean }): Promise<Response>;

  /**
   * Close the client and release resources.
   */
  close(): void;
}

/**
 * Async HTTP client interface.
 */
export interface AsyncHttpClient {
  /**
   * Build an HTTP request.
   */
  buildRequest(
    method: string,
    url: string,
    options?: {
      params?: Record<string, unknown>;
      content?: string | Uint8Array;
      data?: Record<string, unknown>;
      files?: Record<string, Blob | File>;
      headers?: Record<string, string>;
      timeout?: number;
    }
  ): Request;

  /**
   * Send an HTTP request asynchronously.
   */
  send(request: Request, options?: { stream?: boolean }): Promise<Response>;

  /**
   * Close the client and release resources.
   */
  aclose(): Promise<void>;
}

/**
 * Logger interface for debug output.
 */
export interface Logger {
  debug(message: string, ...args: unknown[]): void;
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, ...args: unknown[]): void;
}

/**
 * Default console logger implementation.
 */
export const defaultLogger: Logger = {
  debug: (message: string, ...args: unknown[]) =>
    console.debug(`[DEBUG] ${message}`, ...args),
  info: (message: string, ...args: unknown[]) =>
    console.info(`[INFO] ${message}`, ...args),
  warn: (message: string, ...args: unknown[]) =>
    console.warn(`[WARN] ${message}`, ...args),
  error: (message: string, ...args: unknown[]) =>
    console.error(`[ERROR] ${message}`, ...args),
};

/**
 * SDK Configuration options.
 */
export interface SDKConfigurationOptions {
  /** Synchronous HTTP client */
  client?: HttpClient | null;
  /** Whether the client was supplied by the user */
  clientSupplied?: boolean;
  /** Asynchronous HTTP client */
  asyncClient?: AsyncHttpClient | null;
  /** Whether the async client was supplied by the user */
  asyncClientSupplied?: boolean;
  /** Security configuration */
  security?: Security | (() => Security) | null;
  /** Server URL override */
  serverUrl?: string;
  /** Server index */
  serverIdx?: number;
  /** Retry configuration */
  retryConfig?: RetryConfig | Unset;
  /** Request timeout in milliseconds */
  timeoutMs?: number;
  /** Server type (regular, pro, ngs) */
  serverType?: ServerType;
  /** Custom auth info */
  customAuthInfo?: Record<string, unknown>;
  /** Debug logger */
  debugLogger?: Logger;
}

/**
 * SDK version information.
 */
export const VERSION = '1.0.0';
export const OPENAPI_DOC_VERSION = '1.0.0';
export const GEN_VERSION = '1.0.0';
export const USER_AGENT = `griddy-sdk-typescript/${VERSION}`;

/**
 * SDK Configuration.
 */
export class SDKConfiguration {
  /** Synchronous HTTP client */
  client: HttpClient | null;
  /** Whether the client was supplied by the user */
  clientSupplied: boolean;
  /** Asynchronous HTTP client */
  asyncClient: AsyncHttpClient | null;
  /** Whether the async client was supplied by the user */
  asyncClientSupplied: boolean;
  /** Security configuration */
  security: Security | (() => Security) | null;
  /** Server URL override */
  serverUrl: string;
  /** Server index */
  serverIdx: number;
  /** SDK language */
  language: string = 'typescript';
  /** OpenAPI doc version */
  openapiDocVersion: string = OPENAPI_DOC_VERSION;
  /** SDK version */
  sdkVersion: string = VERSION;
  /** Generator version */
  genVersion: string = GEN_VERSION;
  /** User agent string */
  userAgent: string = USER_AGENT;
  /** Retry configuration */
  retryConfig: RetryConfig | Unset;
  /** Request timeout in milliseconds */
  timeoutMs: number | null;
  /** Server type */
  serverType: ServerType;
  /** Custom auth info */
  customAuthInfo: Record<string, unknown> | null;
  /** Debug logger */
  debugLogger: Logger;
  /** SDK hooks (internal) */
  private _hooks: SDKHooks | null = null;

  constructor(options: SDKConfigurationOptions = {}) {
    this.client = options.client ?? null;
    this.clientSupplied = options.clientSupplied ?? false;
    this.asyncClient = options.asyncClient ?? null;
    this.asyncClientSupplied = options.asyncClientSupplied ?? false;
    this.security = options.security ?? null;
    this.serverUrl = options.serverUrl ?? '';
    this.serverIdx = options.serverIdx ?? 0;
    this.retryConfig = options.retryConfig ?? UNSET;
    this.timeoutMs = options.timeoutMs ?? null;
    this.serverType = options.serverType ?? 'regular';
    this.customAuthInfo = options.customAuthInfo ?? null;
    this.debugLogger = options.debugLogger ?? defaultLogger;
  }

  /**
   * Get the hooks instance.
   */
  get hooks(): SDKHooks | null {
    return this._hooks;
  }

  /**
   * Set the hooks instance.
   */
  set hooks(hooks: SDKHooks | null) {
    this._hooks = hooks;
  }

  /**
   * Get server details (URL and variables).
   */
  getServerDetails(): [string, Record<string, string>] {
    if (this.serverUrl) {
      return [this.serverUrl.replace(/\/+$/, ''), {}];
    }

    const serverUrl = SERVERS[this.serverType] ?? SERVERS.regular;
    return [serverUrl, {}];
  }
}

/**
 * Close clients helper function.
 */
export function closeClients(
  config: SDKConfiguration,
  client: HttpClient | null,
  clientSupplied: boolean,
  asyncClient: AsyncHttpClient | null,
  asyncClientSupplied: boolean
): void {
  if (client && !clientSupplied) {
    client.close();
  }
  if (asyncClient && !asyncClientSupplied) {
    // Note: In a real implementation, you'd want to handle async cleanup
    asyncClient.aclose().catch((err) => {
      console.error('Error closing async client:', err);
    });
  }
}
