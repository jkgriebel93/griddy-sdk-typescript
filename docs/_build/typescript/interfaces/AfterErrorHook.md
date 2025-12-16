[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / AfterErrorHook

# Interface: AfterErrorHook

Defined in: [src/griddy/nfl/\_hooks/types.ts:96](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L96)

Hook called after an error response.

## Methods

### afterError()

> **afterError**(`ctx`, `response`, `error`): `AfterErrorResult` \| `Promise`\<`AfterErrorResult`\>

Defined in: [src/griddy/nfl/\_hooks/types.ts:104](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L104)

Called after an error response is received.

#### Parameters

##### ctx

[`AfterErrorContext`](AfterErrorContext.md)

The hook context

##### response

`Response`

The error response, if any

##### error

`Error`

The error that occurred, if any

#### Returns

`AfterErrorResult` \| `Promise`\<`AfterErrorResult`\>

Tuple of (response, error) - either can be modified or null
