/**
 * SDK Hooks implementation.
 *
 * Manages registration and execution of hooks throughout the SDK lifecycle.
 */

import type { SDKConfiguration } from "../sdkConfiguration";
import type {
	AfterErrorContext,
	AfterErrorHook,
	AfterErrorResult,
	AfterSuccessContext,
	AfterSuccessHook,
	BeforeRequestContext,
	BeforeRequestHook,
	Hooks,
	SDKInitHook,
} from "./types";

/**
 * SDKHooks manages all hook registrations and executions.
 */
export class SDKHooks implements Hooks {
	private sdkInitHooks: SDKInitHook[] = [];
	private beforeRequestHooks: BeforeRequestHook[] = [];
	private afterSuccessHooks: AfterSuccessHook[] = [];
	private afterErrorHooks: AfterErrorHook[] = [];

	/**
	 * Register an SDK initialization hook.
	 */
	registerSdkInitHook(hook: SDKInitHook): void {
		this.sdkInitHooks.push(hook);
	}

	/**
	 * Register a before-request hook.
	 */
	registerBeforeRequestHook(hook: BeforeRequestHook): void {
		this.beforeRequestHooks.push(hook);
	}

	/**
	 * Register an after-success hook.
	 */
	registerAfterSuccessHook(hook: AfterSuccessHook): void {
		this.afterSuccessHooks.push(hook);
	}

	/**
	 * Register an after-error hook.
	 */
	registerAfterErrorHook(hook: AfterErrorHook): void {
		this.afterErrorHooks.push(hook);
	}

	/**
	 * Execute SDK initialization hooks.
	 */
	sdkInit(config: SDKConfiguration): SDKConfiguration {
		let currentConfig = config;
		for (const hook of this.sdkInitHooks) {
			currentConfig = hook.sdkInit(currentConfig);
		}
		return currentConfig;
	}

	/**
	 * Execute before-request hooks.
	 */
	async beforeRequest(
		ctx: BeforeRequestContext,
		request: Request,
	): Promise<Request> {
		let currentRequest = request;
		for (const hook of this.beforeRequestHooks) {
			const result = hook.beforeRequest(ctx, currentRequest);
			currentRequest = result instanceof Promise ? await result : result;
		}
		return currentRequest;
	}

	/**
	 * Execute after-success hooks.
	 */
	async afterSuccess(
		ctx: AfterSuccessContext,
		response: Response,
	): Promise<Response> {
		let currentResponse = response;
		for (const hook of this.afterSuccessHooks) {
			const result = hook.afterSuccess(ctx, currentResponse);
			currentResponse = result instanceof Promise ? await result : result;
		}
		return currentResponse;
	}

	/**
	 * Execute after-error hooks.
	 */
	async afterError(
		ctx: AfterErrorContext,
		response: Response | null,
		error: Error | null,
	): Promise<AfterErrorResult> {
		let currentResult: AfterErrorResult = { response, error };
		for (const hook of this.afterErrorHooks) {
			const result = hook.afterError(
				ctx,
				currentResult.response,
				currentResult.error,
			);
			currentResult = result instanceof Promise ? await result : result;
		}
		return currentResult;
	}
}

/**
 * Create a new SDKHooks instance with optional initial hooks.
 */
export function createSDKHooks(options?: {
	sdkInitHooks?: SDKInitHook[];
	beforeRequestHooks?: BeforeRequestHook[];
	afterSuccessHooks?: AfterSuccessHook[];
	afterErrorHooks?: AfterErrorHook[];
}): SDKHooks {
	const hooks = new SDKHooks();

	if (options?.sdkInitHooks) {
		for (const hook of options.sdkInitHooks) {
			hooks.registerSdkInitHook(hook);
		}
	}

	if (options?.beforeRequestHooks) {
		for (const hook of options.beforeRequestHooks) {
			hooks.registerBeforeRequestHook(hook);
		}
	}

	if (options?.afterSuccessHooks) {
		for (const hook of options.afterSuccessHooks) {
			hooks.registerAfterSuccessHook(hook);
		}
	}

	if (options?.afterErrorHooks) {
		for (const hook of options.afterErrorHooks) {
			hooks.registerAfterErrorHook(hook);
		}
	}

	return hooks;
}
