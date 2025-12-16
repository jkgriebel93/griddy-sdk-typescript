[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / SDKConfiguration

# Class: SDKConfiguration

Defined in: [src/griddy/nfl/sdkConfiguration.ts:148](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L148)

SDK Configuration.

## Constructors

### Constructor

> **new SDKConfiguration**(`options`): `SDKConfiguration`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:186](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L186)

#### Parameters

##### options

[`SDKConfigurationOptions`](../interfaces/SDKConfigurationOptions.md) = `{}`

#### Returns

`SDKConfiguration`

## Properties

### asyncClient

> **asyncClient**: [`AsyncHttpClient`](../interfaces/AsyncHttpClient.md)

Defined in: [src/griddy/nfl/sdkConfiguration.ts:154](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L154)

Asynchronous HTTP client

***

### asyncClientSupplied

> **asyncClientSupplied**: `boolean`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:156](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L156)

Whether the async client was supplied by the user

***

### client

> **client**: [`HttpClient`](../interfaces/HttpClient.md)

Defined in: [src/griddy/nfl/sdkConfiguration.ts:150](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L150)

Synchronous HTTP client

***

### clientSupplied

> **clientSupplied**: `boolean`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:152](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L152)

Whether the client was supplied by the user

***

### customAuthInfo

> **customAuthInfo**: `Record`\<`string`, `unknown`\>

Defined in: [src/griddy/nfl/sdkConfiguration.ts:180](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L180)

Custom auth info

***

### debugLogger

> **debugLogger**: [`Logger`](../interfaces/Logger.md)

Defined in: [src/griddy/nfl/sdkConfiguration.ts:182](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L182)

Debug logger

***

### genVersion

> **genVersion**: `string` = `GEN_VERSION`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:170](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L170)

Generator version

***

### language

> **language**: `string` = `"typescript"`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:164](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L164)

SDK language

***

### openapiDocVersion

> **openapiDocVersion**: `string` = `OPENAPI_DOC_VERSION`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:166](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L166)

OpenAPI doc version

***

### retryConfig

> **retryConfig**: *typeof* `UNSET` \| [`RetryConfig`](../interfaces/RetryConfig.md)

Defined in: [src/griddy/nfl/sdkConfiguration.ts:174](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L174)

Retry configuration

***

### sdkVersion

> **sdkVersion**: `string` = `VERSION`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:168](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L168)

SDK version

***

### security

> **security**: [`Security`](../interfaces/Security.md) \| () => [`Security`](../interfaces/Security.md)

Defined in: [src/griddy/nfl/sdkConfiguration.ts:158](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L158)

Security configuration

***

### serverIdx

> **serverIdx**: `number`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:162](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L162)

Server index

***

### serverType

> **serverType**: `"regular"` \| `"pro"` \| `"ngs"`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:178](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L178)

Server type

***

### serverUrl

> **serverUrl**: `string`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:160](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L160)

Server URL override

***

### timeoutMs

> **timeoutMs**: `number`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:176](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L176)

Request timeout in milliseconds

***

### userAgent

> **userAgent**: `string` = `USER_AGENT`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:172](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L172)

User agent string

## Accessors

### hooks

#### Get Signature

> **get** **hooks**(): [`SDKHooks`](SDKHooks.md)

Defined in: [src/griddy/nfl/sdkConfiguration.ts:204](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L204)

Get the hooks instance.

##### Returns

[`SDKHooks`](SDKHooks.md)

#### Set Signature

> **set** **hooks**(`hooks`): `void`

Defined in: [src/griddy/nfl/sdkConfiguration.ts:211](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L211)

Set the hooks instance.

##### Parameters

###### hooks

[`SDKHooks`](SDKHooks.md)

##### Returns

`void`

## Methods

### getServerDetails()

> **getServerDetails**(): \[`string`, `Record`\<`string`, `string`\>\]

Defined in: [src/griddy/nfl/sdkConfiguration.ts:218](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdkConfiguration.ts#L218)

Get server details (URL and variables).

#### Returns

\[`string`, `Record`\<`string`, `string`\>\]
