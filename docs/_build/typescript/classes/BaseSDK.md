[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / BaseSDK

# Class: BaseSDK

Defined in: [src/griddy/nfl/baseSdk.ts:74](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L74)

Base SDK class providing common functionality for all endpoint classes.

## Extended by

- [`Games`](Games.md)
- [`GriddyNFL`](GriddyNFL.md)

## Constructors

### Constructor

> **new BaseSDK**(`sdkConfig`, `parentRef?`): `BaseSDK`

Defined in: [src/griddy/nfl/baseSdk.ts:78](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L78)

#### Parameters

##### sdkConfig

[`SDKConfiguration`](SDKConfiguration.md)

##### parentRef?

`object`

#### Returns

`BaseSDK`

## Properties

### parentRef

> `protected` **parentRef**: `object` = `null`

Defined in: [src/griddy/nfl/baseSdk.ts:76](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L76)

***

### sdkConfiguration

> `protected` **sdkConfiguration**: [`SDKConfiguration`](SDKConfiguration.md)

Defined in: [src/griddy/nfl/baseSdk.ts:75](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L75)

## Methods

### buildRequest()

> `protected` **buildRequest**(`config`): `Request`

Defined in: [src/griddy/nfl/baseSdk.ts:270](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L270)

Build an HTTP request.

#### Parameters

##### config

[`EndpointConfig`](../interfaces/EndpointConfig.md)

#### Returns

`Request`

***

### createHookContext()

> `protected` **createHookContext**(`operationId`, `baseUrl`): [`HookContext`](../interfaces/HookContext.md)

Defined in: [src/griddy/nfl/baseSdk.ts:152](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L152)

Create a hook context for request execution.

#### Parameters

##### operationId

`string`

##### baseUrl

`string`

#### Returns

[`HookContext`](../interfaces/HookContext.md)

***

### doRequest()

> `protected` **doRequest**(`hookCtx`, `request`, `errorStatusCodes`, `retryConfig?`): `Promise`\<`Response`\>

Defined in: [src/griddy/nfl/baseSdk.ts:338](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L338)

Execute an HTTP request with hooks and retries.

#### Parameters

##### hookCtx

[`HookContext`](../interfaces/HookContext.md)

##### request

`Request`

##### errorStatusCodes

`string`[]

##### retryConfig?

###### config

[`RetryConfig`](../interfaces/RetryConfig.md)

###### statusCodes

`string`[]

#### Returns

`Promise`\<`Response`\>

***

### executeEndpoint()

> `protected` **executeEndpoint**\<`T`\>(`config`): `Promise`\<`T`\>

Defined in: [src/griddy/nfl/baseSdk.ts:522](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L522)

Execute an endpoint and return the response.

#### Type Parameters

##### T

`T`

#### Parameters

##### config

[`EndpointConfig`](../interfaces/EndpointConfig.md)\<`T`\>

#### Returns

`Promise`\<`T`\>

***

### generateUrl()

> `protected` **generateUrl**(`baseUrl`, `path`, `request`, `requestMeta?`): `string`

Defined in: [src/griddy/nfl/baseSdk.ts:168](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L168)

Generate URL with path parameters substituted.

#### Parameters

##### baseUrl

`string`

##### path

`string`

##### request

`Record`\<`string`, `unknown`\>

##### requestMeta?

`Record`\<`string`, [`ParamMetadata`](../interfaces/ParamMetadata.md)\>

#### Returns

`string`

***

### getHeaders()

> `protected` **getHeaders**(`request`, `requestMeta?`): `Record`\<`string`, `string`\>

Defined in: [src/griddy/nfl/baseSdk.ts:222](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L222)

Get headers from request.

#### Parameters

##### request

`Record`\<`string`, `unknown`\>

##### requestMeta?

`Record`\<`string`, [`ParamMetadata`](../interfaces/ParamMetadata.md)\>

#### Returns

`Record`\<`string`, `string`\>

***

### getQueryParams()

> `protected` **getQueryParams**(`request`, `requestMeta?`): `Record`\<`string`, `string`\>

Defined in: [src/griddy/nfl/baseSdk.ts:197](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L197)

Get query parameters from request.

#### Parameters

##### request

`Record`\<`string`, `unknown`\>

##### requestMeta?

`Record`\<`string`, [`ParamMetadata`](../interfaces/ParamMetadata.md)\>

#### Returns

`Record`\<`string`, `string`\>

***

### getSecurityParams()

> `protected` **getSecurityParams**(`security`): `object`

Defined in: [src/griddy/nfl/baseSdk.ts:247](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L247)

Get security headers and query params.

#### Parameters

##### security

[`Security`](../interfaces/Security.md) | () => [`Security`](../interfaces/Security.md)

#### Returns

`object`

##### headers

> **headers**: `Record`\<`string`, `string`\>

##### queryParams

> **queryParams**: `Record`\<`string`, `string`\>

***

### getUrl()

> `protected` **getUrl**(`baseUrl`, `urlVariables`): `string`

Defined in: [src/griddy/nfl/baseSdk.ts:86](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L86)

Get the URL with template variables.

#### Parameters

##### baseUrl

`string`

##### urlVariables

`Record`\<`string`, `string`\>

#### Returns

`string`

***

### handleJsonResponse()

> `protected` **handleJsonResponse**\<`T`\>(`response`, `errorStatusCodes`): `Promise`\<`T`\>

Defined in: [src/griddy/nfl/baseSdk.ts:490](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L490)

Handle JSON response with error handling.

#### Type Parameters

##### T

`T`

#### Parameters

##### response

`Response`

##### errorStatusCodes

`string`[]

#### Returns

`Promise`\<`T`\>

***

### resolveBaseUrl()

> `protected` **resolveBaseUrl**(`serverUrl?`, `urlVariables?`): `string`

Defined in: [src/griddy/nfl/baseSdk.ts:106](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L106)

Resolve the base URL for a request.

#### Parameters

##### serverUrl?

`string`

##### urlVariables?

`Record`\<`string`, `string`\>

#### Returns

`string`

***

### resolveRetryConfig()

> `protected` **resolveRetryConfig**(`retries`, `retryStatusCodes?`): `object`

Defined in: [src/griddy/nfl/baseSdk.ts:129](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L129)

Resolve retry configuration.

#### Parameters

##### retries

*typeof* `UNSET` | [`RetryConfig`](../interfaces/RetryConfig.md)

##### retryStatusCodes?

`string`[]

#### Returns

`object`

##### config

> **config**: [`RetryConfig`](../interfaces/RetryConfig.md)

##### statusCodes

> **statusCodes**: `string`[]

***

### resolveTimeout()

> `protected` **resolveTimeout**(`timeoutMs?`): `number`

Defined in: [src/griddy/nfl/baseSdk.ts:119](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L119)

Resolve timeout, falling back to SDK configuration.

#### Parameters

##### timeoutMs?

`number`

#### Returns

`number`
