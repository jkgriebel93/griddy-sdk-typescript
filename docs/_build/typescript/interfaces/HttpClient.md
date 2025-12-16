[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / HttpClient

# Interface: HttpClient

Defined in: [src/griddy/nfl/sdkConfiguration.ts:24](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L24)

HTTP client interface for making requests.

## Methods

### buildRequest()

> **buildRequest**(`method`, `url`, `options?`): `Request`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:28](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L28)

Build an HTTP request.

#### Parameters

##### method

`string`

##### url

`string`

##### options?

###### content?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

###### data?

`Record`\<`string`, `unknown`\>

###### files?

`Record`\<`string`, `Blob` \| `File`\>

###### headers?

`Record`\<`string`, `string`\>

###### params?

`Record`\<`string`, `unknown`\>

###### timeout?

`number`

#### Returns

`Request`

***

### close()

> **close**(): `void`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:49](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L49)

Close the client and release resources.

#### Returns

`void`

***

### send()

> **send**(`request`, `options?`): `Promise`\<`Response`\>

Defined in: [src/griddy/nfl/sdkConfiguration.ts:44](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L44)

Send an HTTP request.

#### Parameters

##### request

`Request`

##### options?

###### stream?

`boolean`

#### Returns

`Promise`\<`Response`\>
