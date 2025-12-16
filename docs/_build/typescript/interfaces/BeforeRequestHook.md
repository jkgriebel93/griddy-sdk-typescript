[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / BeforeRequestHook

# Interface: BeforeRequestHook

Defined in: [src/griddy/nfl/\_hooks/types.ts:56](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L56)

Hook called before a request is sent.

## Methods

### beforeRequest()

> **beforeRequest**(`ctx`, `request`): `Request` \| `Promise`\<`Request`\>

Defined in: [src/griddy/nfl/\_hooks/types.ts:63](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/_hooks/types.ts#L63)

Called before a request is sent.

#### Parameters

##### ctx

[`BeforeRequestContext`](BeforeRequestContext.md)

The hook context

##### request

`Request`

The request to be sent

#### Returns

`Request` \| `Promise`\<`Request`\>

Modified request or an error to throw
