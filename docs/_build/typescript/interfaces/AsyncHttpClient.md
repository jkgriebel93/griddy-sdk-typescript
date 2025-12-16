[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / AsyncHttpClient

# Interface: AsyncHttpClient

Defined in: [src/griddy/nfl/sdkConfiguration.ts:55](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L55)

Async HTTP client interface.

## Methods

### aclose()

> **aclose**(): `Promise`\<`void`\>

Defined in: [src/griddy/nfl/sdkConfiguration.ts:80](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L80)

Close the client and release resources.

#### Returns

`Promise`\<`void`\>

***

### buildRequest()

> **buildRequest**(`method`, `url`, `options?`): `Request`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:59](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L59)

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

### send()

> **send**(`request`, `options?`): `Promise`\<`Response`\>

Defined in: [src/griddy/nfl/sdkConfiguration.ts:75](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L75)

Send an HTTP request asynchronously.

#### Parameters

##### request

`Request`

##### options?

###### stream?

`boolean`

#### Returns

`Promise`\<`Response`\>
