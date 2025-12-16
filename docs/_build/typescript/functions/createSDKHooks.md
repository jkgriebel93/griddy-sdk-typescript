[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / createSDKHooks

# Function: createSDKHooks()

> **createSDKHooks**(`options?`): [`SDKHooks`](../classes/SDKHooks.md)

Defined in: [src/griddy/nfl/\_hooks/sdkHooks.ts:122](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/sdkHooks.ts#L122)

Create a new SDKHooks instance with optional initial hooks.

## Parameters

### options?

#### afterErrorHooks?

[`AfterErrorHook`](../interfaces/AfterErrorHook.md)[]

#### afterSuccessHooks?

[`AfterSuccessHook`](../interfaces/AfterSuccessHook.md)[]

#### beforeRequestHooks?

[`BeforeRequestHook`](../interfaces/BeforeRequestHook.md)[]

#### sdkInitHooks?

[`SDKInitHook`](../interfaces/SDKInitHook.md)[]

## Returns

[`SDKHooks`](../classes/SDKHooks.md)
