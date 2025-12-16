[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / HookContext

# Interface: HookContext

Defined in: [src/griddy/nfl/\_hooks/types.ts:13](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L13)

Context available to all hooks.

## Extended by

- [`AfterErrorContext`](AfterErrorContext.md)
- [`AfterSuccessContext`](AfterSuccessContext.md)
- [`BeforeRequestContext`](BeforeRequestContext.md)

## Properties

### baseUrl

> **baseUrl**: `string`

Defined in: [src/griddy/nfl/\_hooks/types.ts:17](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L17)

Base URL for the request

***

### config

> **config**: [`SDKConfiguration`](../classes/SDKConfiguration.md)

Defined in: [src/griddy/nfl/\_hooks/types.ts:15](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L15)

SDK configuration

***

### oauth2Scopes

> **oauth2Scopes**: `string`[]

Defined in: [src/griddy/nfl/\_hooks/types.ts:21](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L21)

OAuth2 scopes required for this operation

***

### operationId

> **operationId**: `string`

Defined in: [src/griddy/nfl/\_hooks/types.ts:19](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L19)

Operation identifier (e.g., "getPlayer")

***

### securitySource

> **securitySource**: `unknown`

Defined in: [src/griddy/nfl/\_hooks/types.ts:23](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L23)

Security source for authentication
