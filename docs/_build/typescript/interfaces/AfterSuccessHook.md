[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / AfterSuccessHook

# Interface: AfterSuccessHook

Defined in: [src/griddy/nfl/\_hooks/types.ts:72](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L72)

Hook called after a successful response.

## Methods

### afterSuccess()

> **afterSuccess**(`ctx`, `response`): `Response` \| `Promise`\<`Response`\>

Defined in: [src/griddy/nfl/\_hooks/types.ts:79](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L79)

Called after a successful response is received.

#### Parameters

##### ctx

[`AfterSuccessContext`](AfterSuccessContext.md)

The hook context

##### response

`Response`

The response received

#### Returns

`Response` \| `Promise`\<`Response`\>

Modified response or an error to throw
