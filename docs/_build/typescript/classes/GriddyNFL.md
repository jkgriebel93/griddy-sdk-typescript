[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / GriddyNFL

# Class: GriddyNFL

Defined in: [src/griddy/nfl/sdk.ts:96](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdk.ts#L96)

Main client for accessing NFL data from multiple API endpoints.

GriddyNFL provides unified access to NFL data through three API categories:

- **Regular API**: Public NFL.com endpoints for games, rosters, standings
- **Pro API**: Advanced statistics, betting odds, player projections
- **Next Gen Stats**: Player tracking data and advanced analytics

Sub-SDKs are loaded lazily on first access to minimize startup time.

## Example

```typescript
// Initialize with auth token
const nfl = new GriddyNFL({ nflAuth: { accessToken: 'your_token' } });

// Get games
const games = await nfl.games.getGames(2024, 'REG', 1);

// Use with async/await pattern
try {
  const boxScore = await nfl.games.getBoxScore('game-id');
  console.log(boxScore);
} catch (error) {
  console.error('Error:', error);
}
```

## Extends

- [`BaseSDK`](BaseSDK.md)

## Constructors

### Constructor

> **new GriddyNFL**(`options`): `GriddyNFL`

Defined in: [src/griddy/nfl/sdk.ts:135](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdk.ts#L135)

Initialize the GriddyNFL client.

You must provide authentication via a pre-obtained auth token (nflAuth).
Browser-based authentication is not implemented in the TypeScript version.

#### Parameters

##### options

[`GriddyNFLOptions`](../interfaces/GriddyNFLOptions.md)

SDK options

#### Returns

`GriddyNFL`

#### Throws

Error if no authentication is provided

#### Example

```typescript
const nfl = new GriddyNFL({
  nflAuth: { accessToken: 'your_nfl_access_token' },
  timeoutMs: 30000,
});
```

#### Overrides

[`BaseSDK`](BaseSDK.md).[`constructor`](BaseSDK.md#constructor)

## Properties

### parentRef

> `protected` **parentRef**: `object` = `null`

Defined in: [src/griddy/nfl/baseSdk.ts:76](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L76)

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`parentRef`](BaseSDK.md#parentref)

***

### sdkConfiguration

> `protected` **sdkConfiguration**: [`SDKConfiguration`](SDKConfiguration.md)

Defined in: [src/griddy/nfl/baseSdk.ts:75](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/baseSdk.ts#L75)

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`sdkConfiguration`](BaseSDK.md#sdkconfiguration)

## Accessors

### games

#### Get Signature

> **get** **games**(): [`Games`](Games.md)

Defined in: [src/griddy/nfl/sdk.ts:178](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdk.ts#L178)

Game schedules, scores, and details from the regular API.

##### Returns

[`Games`](Games.md)

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

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`buildRequest`](BaseSDK.md#buildrequest)

***

### close()

> **close**(): `void`

Defined in: [src/griddy/nfl/sdk.ts:205](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdk.ts#L205)

Close the client and release resources.

#### Returns

`void`

#### Example

```typescript
const nfl = new GriddyNFL({ nflAuth: { accessToken: 'token' } });
try {
  const games = await nfl.games.getGames(2024, 'REG', 1);
} finally {
  nfl.close();
}
```

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

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`createHookContext`](BaseSDK.md#createhookcontext)

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

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`doRequest`](BaseSDK.md#dorequest)

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

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`executeEndpoint`](BaseSDK.md#executeendpoint)

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

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`generateUrl`](BaseSDK.md#generateurl)

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

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`getHeaders`](BaseSDK.md#getheaders)

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

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`getQueryParams`](BaseSDK.md#getqueryparams)

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

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`getSecurityParams`](BaseSDK.md#getsecurityparams)

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

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`getUrl`](BaseSDK.md#geturl)

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

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`handleJsonResponse`](BaseSDK.md#handlejsonresponse)

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

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`resolveBaseUrl`](BaseSDK.md#resolvebaseurl)

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

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`resolveRetryConfig`](BaseSDK.md#resolveretryconfig)

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

#### Inherited from

[`BaseSDK`](BaseSDK.md).[`resolveTimeout`](BaseSDK.md#resolvetimeout)
