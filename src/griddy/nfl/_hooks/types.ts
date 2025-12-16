/**
 * Hook types for the NFL SDK.
 *
 * Hooks allow customization of SDK behavior at various points in the
 * request/response lifecycle.
 */

import type { SDKConfiguration } from '../sdkConfiguration';

/**
 * Context available to all hooks.
 */
export interface HookContext {
  /** SDK configuration */
  config: SDKConfiguration;
  /** Base URL for the request */
  baseUrl: string;
  /** Operation identifier (e.g., "getPlayer") */
  operationId: string;
  /** OAuth2 scopes required for this operation */
  oauth2Scopes: string[];
  /** Security source for authentication */
  securitySource: unknown;
}

/**
 * Context for before-request hooks.
 */
export interface BeforeRequestContext extends HookContext {}

/**
 * Context for after-success hooks.
 */
export interface AfterSuccessContext extends HookContext {}

/**
 * Context for after-error hooks.
 */
export interface AfterErrorContext extends HookContext {}

/**
 * Hook called during SDK initialization.
 */
export interface SDKInitHook {
  /**
   * Called when the SDK is initialized.
   * @param config - The SDK configuration
   * @returns Modified SDK configuration
   */
  sdkInit(config: SDKConfiguration): SDKConfiguration;
}

/**
 * Hook called before a request is sent.
 */
export interface BeforeRequestHook {
  /**
   * Called before a request is sent.
   * @param ctx - The hook context
   * @param request - The request to be sent
   * @returns Modified request or an error to throw
   */
  beforeRequest(
    ctx: BeforeRequestContext,
    request: Request
  ): Request | Promise<Request>;
}

/**
 * Hook called after a successful response.
 */
export interface AfterSuccessHook {
  /**
   * Called after a successful response is received.
   * @param ctx - The hook context
   * @param response - The response received
   * @returns Modified response or an error to throw
   */
  afterSuccess(
    ctx: AfterSuccessContext,
    response: Response
  ): Response | Promise<Response>;
}

/**
 * Result type for after-error hooks.
 */
export type AfterErrorResult = {
  response: Response | null;
  error: Error | null;
};

/**
 * Hook called after an error response.
 */
export interface AfterErrorHook {
  /**
   * Called after an error response is received.
   * @param ctx - The hook context
   * @param response - The error response, if any
   * @param error - The error that occurred, if any
   * @returns Tuple of (response, error) - either can be modified or null
   */
  afterError(
    ctx: AfterErrorContext,
    response: Response | null,
    error: Error | null
  ): AfterErrorResult | Promise<AfterErrorResult>;
}

/**
 * Interface for hook registration.
 */
export interface Hooks {
  /** Register an SDK init hook */
  registerSdkInitHook(hook: SDKInitHook): void;
  /** Register a before-request hook */
  registerBeforeRequestHook(hook: BeforeRequestHook): void;
  /** Register an after-success hook */
  registerAfterSuccessHook(hook: AfterSuccessHook): void;
  /** Register an after-error hook */
  registerAfterErrorHook(hook: AfterErrorHook): void;
}

/**
 * Create a hook context from the base context.
 */
export function createBeforeRequestContext(
  ctx: HookContext
): BeforeRequestContext {
  return { ...ctx };
}

/**
 * Create an after-success context from the base context.
 */
export function createAfterSuccessContext(
  ctx: HookContext
): AfterSuccessContext {
  return { ...ctx };
}

/**
 * Create an after-error context from the base context.
 */
export function createAfterErrorContext(ctx: HookContext): AfterErrorContext {
  return { ...ctx };
}
