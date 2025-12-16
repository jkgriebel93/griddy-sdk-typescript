[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / EndpointConfig

# Interface: EndpointConfig\<T\>

Defined in: [src/griddy/nfl/baseSdk.ts:32](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L32)

Configuration for an API endpoint.

## Type Parameters

### T

`T` = `unknown`

## Properties

### acceptHeaderValue?

> `optional` **acceptHeaderValue**: `string`

Defined in: [src/griddy/nfl/baseSdk.ts:68](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L68)

Accept header value

***

### errorStatusCodes

> **errorStatusCodes**: `string`[]

Defined in: [src/griddy/nfl/baseSdk.ts:46](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L46)

Expected error status codes

***

### getSerializedBody()?

> `optional` **getSerializedBody**: () => `SerializedRequestBody`

Defined in: [src/griddy/nfl/baseSdk.ts:64](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L64)

Body serializer function

#### Returns

`SerializedRequestBody`

***

### httpHeaders?

> `optional` **httpHeaders**: `Record`\<`string`, `string`\>

Defined in: [src/griddy/nfl/baseSdk.ts:58](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L58)

Additional HTTP headers

***

### method

> **method**: `"GET"` \| `"POST"` \| `"PUT"` \| `"DELETE"` \| `"PATCH"`

Defined in: [src/griddy/nfl/baseSdk.ts:34](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L34)

HTTP method

***

### operationId

> **operationId**: `string`

Defined in: [src/griddy/nfl/baseSdk.ts:38](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L38)

Operation identifier

***

### path

> **path**: `string`

Defined in: [src/griddy/nfl/baseSdk.ts:36](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L36)

URL path with {param} placeholders

***

### request

> **request**: `Record`\<`string`, `unknown`\>

Defined in: [src/griddy/nfl/baseSdk.ts:40](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L40)

Request parameters

***

### requestBodyRequired?

> `optional` **requestBodyRequired**: `boolean`

Defined in: [src/griddy/nfl/baseSdk.ts:48](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L48)

Whether request body is required

***

### requestHasPathParams?

> `optional` **requestHasPathParams**: `boolean`

Defined in: [src/griddy/nfl/baseSdk.ts:50](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L50)

Whether request has path parameters

***

### requestHasQueryParams?

> `optional` **requestHasQueryParams**: `boolean`

Defined in: [src/griddy/nfl/baseSdk.ts:52](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L52)

Whether request has query parameters

***

### requestMeta?

> `optional` **requestMeta**: `Record`\<`string`, [`ParamMetadata`](ParamMetadata.md)\>

Defined in: [src/griddy/nfl/baseSdk.ts:42](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L42)

Request parameter metadata

***

### responseType?

> `optional` **responseType**: `string`

Defined in: [src/griddy/nfl/baseSdk.ts:44](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L44)

Response type constructor (for documentation)

***

### retries?

> `optional` **retries**: *typeof* `UNSET` \| [`RetryConfig`](RetryConfig.md)

Defined in: [src/griddy/nfl/baseSdk.ts:60](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L60)

Retry configuration

***

### returnRawJson?

> `optional` **returnRawJson**: `boolean`

Defined in: [src/griddy/nfl/baseSdk.ts:62](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L62)

Return raw JSON instead of typed response

***

### serverUrl?

> `optional` **serverUrl**: `string`

Defined in: [src/griddy/nfl/baseSdk.ts:54](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L54)

Server URL override

***

### timeoutMs?

> `optional` **timeoutMs**: `number`

Defined in: [src/griddy/nfl/baseSdk.ts:56](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L56)

Timeout in milliseconds

***

### userAgentHeader?

> `optional` **userAgentHeader**: `string`

Defined in: [src/griddy/nfl/baseSdk.ts:66](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L66)

User agent header name
