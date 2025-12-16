[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / AfterErrorContext

# Interface: AfterErrorContext

Defined in: [src/griddy/nfl/\_hooks/types.ts:39](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L39)

Context for after-error hooks.

## Extends

- [`HookContext`](HookContext.md)

## Properties

### baseUrl

> **baseUrl**: `string`

Defined in: [src/griddy/nfl/\_hooks/types.ts:17](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L17)

Base URL for the request

#### Inherited from

[`HookContext`](HookContext.md).[`baseUrl`](HookContext.md#baseurl)

***

### config

> **config**: [`SDKConfiguration`](../classes/SDKConfiguration.md)

Defined in: [src/griddy/nfl/\_hooks/types.ts:15](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L15)

SDK configuration

#### Inherited from

[`HookContext`](HookContext.md).[`config`](HookContext.md#config)

***

### oauth2Scopes

> **oauth2Scopes**: `string`[]

Defined in: [src/griddy/nfl/\_hooks/types.ts:21](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L21)

OAuth2 scopes required for this operation

#### Inherited from

[`HookContext`](HookContext.md).[`oauth2Scopes`](HookContext.md#oauth2scopes)

***

### operationId

> **operationId**: `string`

Defined in: [src/griddy/nfl/\_hooks/types.ts:19](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L19)

Operation identifier (e.g., "getPlayer")

#### Inherited from

[`HookContext`](HookContext.md).[`operationId`](HookContext.md#operationid)

***

### securitySource

> **securitySource**: `unknown`

Defined in: [src/griddy/nfl/\_hooks/types.ts:23](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L23)

Security source for authentication

#### Inherited from

[`HookContext`](HookContext.md).[`securitySource`](HookContext.md#securitysource)
