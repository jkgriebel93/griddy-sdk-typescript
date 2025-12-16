[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / SDKHooks

# Class: SDKHooks

Defined in: [src/griddy/nfl/\_hooks/sdkHooks.ts:23](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/sdkHooks.ts#L23)

SDKHooks manages all hook registrations and executions.

## Implements

- [`Hooks`](../interfaces/Hooks.md)

## Constructors

### Constructor

> **new SDKHooks**(): `SDKHooks`

#### Returns

`SDKHooks`

## Methods

### afterError()

> **afterError**(`ctx`, `response`, `error`): `Promise`\<`AfterErrorResult`\>

Defined in: [src/griddy/nfl/\_hooks/sdkHooks.ts:101](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/sdkHooks.ts#L101)

Execute after-error hooks.

#### Parameters

##### ctx

[`AfterErrorContext`](../interfaces/AfterErrorContext.md)

##### response

`Response`

##### error

`Error`

#### Returns

`Promise`\<`AfterErrorResult`\>

***

### afterSuccess()

> **afterSuccess**(`ctx`, `response`): `Promise`\<`Response`\>

Defined in: [src/griddy/nfl/\_hooks/sdkHooks.ts:86](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/sdkHooks.ts#L86)

Execute after-success hooks.

#### Parameters

##### ctx

[`AfterSuccessContext`](../interfaces/AfterSuccessContext.md)

##### response

`Response`

#### Returns

`Promise`\<`Response`\>

***

### beforeRequest()

> **beforeRequest**(`ctx`, `request`): `Promise`\<`Request`\>

Defined in: [src/griddy/nfl/\_hooks/sdkHooks.ts:71](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/sdkHooks.ts#L71)

Execute before-request hooks.

#### Parameters

##### ctx

[`BeforeRequestContext`](../interfaces/BeforeRequestContext.md)

##### request

`Request`

#### Returns

`Promise`\<`Request`\>

***

### registerAfterErrorHook()

> **registerAfterErrorHook**(`hook`): `void`

Defined in: [src/griddy/nfl/\_hooks/sdkHooks.ts:53](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/sdkHooks.ts#L53)

Register an after-error hook.

#### Parameters

##### hook

[`AfterErrorHook`](../interfaces/AfterErrorHook.md)

#### Returns

`void`

#### Implementation of

[`Hooks`](../interfaces/Hooks.md).[`registerAfterErrorHook`](../interfaces/Hooks.md#registeraftererrorhook)

***

### registerAfterSuccessHook()

> **registerAfterSuccessHook**(`hook`): `void`

Defined in: [src/griddy/nfl/\_hooks/sdkHooks.ts:46](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/sdkHooks.ts#L46)

Register an after-success hook.

#### Parameters

##### hook

[`AfterSuccessHook`](../interfaces/AfterSuccessHook.md)

#### Returns

`void`

#### Implementation of

[`Hooks`](../interfaces/Hooks.md).[`registerAfterSuccessHook`](../interfaces/Hooks.md#registeraftersuccesshook)

***

### registerBeforeRequestHook()

> **registerBeforeRequestHook**(`hook`): `void`

Defined in: [src/griddy/nfl/\_hooks/sdkHooks.ts:39](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/sdkHooks.ts#L39)

Register a before-request hook.

#### Parameters

##### hook

[`BeforeRequestHook`](../interfaces/BeforeRequestHook.md)

#### Returns

`void`

#### Implementation of

[`Hooks`](../interfaces/Hooks.md).[`registerBeforeRequestHook`](../interfaces/Hooks.md#registerbeforerequesthook)

***

### registerSdkInitHook()

> **registerSdkInitHook**(`hook`): `void`

Defined in: [src/griddy/nfl/\_hooks/sdkHooks.ts:32](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/sdkHooks.ts#L32)

Register an SDK initialization hook.

#### Parameters

##### hook

[`SDKInitHook`](../interfaces/SDKInitHook.md)

#### Returns

`void`

#### Implementation of

[`Hooks`](../interfaces/Hooks.md).[`registerSdkInitHook`](../interfaces/Hooks.md#registersdkinithook)

***

### sdkInit()

> **sdkInit**(`config`): [`SDKConfiguration`](SDKConfiguration.md)

Defined in: [src/griddy/nfl/\_hooks/sdkHooks.ts:60](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/sdkHooks.ts#L60)

Execute SDK initialization hooks.

#### Parameters

##### config

[`SDKConfiguration`](SDKConfiguration.md)

#### Returns

[`SDKConfiguration`](SDKConfiguration.md)
