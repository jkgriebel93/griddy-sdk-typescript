[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / Hooks

# Interface: Hooks

Defined in: [src/griddy/nfl/\_hooks/types.ts:114](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L114)

Interface for hook registration.

## Methods

### registerAfterErrorHook()

> **registerAfterErrorHook**(`hook`): `void`

Defined in: [src/griddy/nfl/\_hooks/types.ts:122](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L122)

Register an after-error hook

#### Parameters

##### hook

[`AfterErrorHook`](AfterErrorHook.md)

#### Returns

`void`

***

### registerAfterSuccessHook()

> **registerAfterSuccessHook**(`hook`): `void`

Defined in: [src/griddy/nfl/\_hooks/types.ts:120](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L120)

Register an after-success hook

#### Parameters

##### hook

[`AfterSuccessHook`](AfterSuccessHook.md)

#### Returns

`void`

***

### registerBeforeRequestHook()

> **registerBeforeRequestHook**(`hook`): `void`

Defined in: [src/griddy/nfl/\_hooks/types.ts:118](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L118)

Register a before-request hook

#### Parameters

##### hook

[`BeforeRequestHook`](BeforeRequestHook.md)

#### Returns

`void`

***

### registerSdkInitHook()

> **registerSdkInitHook**(`hook`): `void`

Defined in: [src/griddy/nfl/\_hooks/types.ts:116](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L116)

Register an SDK init hook

#### Parameters

##### hook

[`SDKInitHook`](SDKInitHook.md)

#### Returns

`void`
