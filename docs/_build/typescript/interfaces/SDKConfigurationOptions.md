[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / SDKConfigurationOptions

# Interface: SDKConfigurationOptions

Defined in: [src/griddy/nfl/sdkConfiguration.ts:110](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L110)

SDK Configuration options.

## Properties

### asyncClient?

> `optional` **asyncClient**: [`AsyncHttpClient`](AsyncHttpClient.md)

Defined in: [src/griddy/nfl/sdkConfiguration.ts:116](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L116)

Asynchronous HTTP client

***

### asyncClientSupplied?

> `optional` **asyncClientSupplied**: `boolean`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:118](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L118)

Whether the async client was supplied by the user

***

### client?

> `optional` **client**: [`HttpClient`](HttpClient.md)

Defined in: [src/griddy/nfl/sdkConfiguration.ts:112](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L112)

Synchronous HTTP client

***

### clientSupplied?

> `optional` **clientSupplied**: `boolean`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:114](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L114)

Whether the client was supplied by the user

***

### customAuthInfo?

> `optional` **customAuthInfo**: `Record`\<`string`, `unknown`\>

Defined in: [src/griddy/nfl/sdkConfiguration.ts:132](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L132)

Custom auth info

***

### debugLogger?

> `optional` **debugLogger**: [`Logger`](Logger.md)

Defined in: [src/griddy/nfl/sdkConfiguration.ts:134](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L134)

Debug logger

***

### retryConfig?

> `optional` **retryConfig**: *typeof* `UNSET` \| [`RetryConfig`](RetryConfig.md)

Defined in: [src/griddy/nfl/sdkConfiguration.ts:126](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L126)

Retry configuration

***

### security?

> `optional` **security**: [`Security`](Security.md) \| () => [`Security`](Security.md)

Defined in: [src/griddy/nfl/sdkConfiguration.ts:120](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L120)

Security configuration

***

### serverIdx?

> `optional` **serverIdx**: `number`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:124](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L124)

Server index

***

### serverType?

> `optional` **serverType**: `"regular"` \| `"pro"` \| `"ngs"`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:130](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L130)

Server type (regular, pro, ngs)

***

### serverUrl?

> `optional` **serverUrl**: `string`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:122](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L122)

Server URL override

***

### timeoutMs?

> `optional` **timeoutMs**: `number`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:128](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L128)

Request timeout in milliseconds
