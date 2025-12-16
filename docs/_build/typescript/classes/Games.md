[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / Games

# Class: Games

Defined in: [src/griddy/nfl/endpoints/regular/football/games.ts:95](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/endpoints/regular/football/games.ts#L95)

Games endpoint class for regular NFL API.

## Extends

- [`BaseSDK`](BaseSDK.md)

## Constructors

### Constructor

> **new Games**(`sdkConfig`, `parentRef?`): `Games`

Defined in: [src/griddy/nfl/endpoints/regular/football/games.ts:96](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/endpoints/regular/football/games.ts#L96)

#### Parameters

##### sdkConfig

[`SDKConfiguration`](SDKConfiguration.md)

##### parentRef?

`object`

#### Returns

`Games`

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

### getBoxScore()

> **getBoxScore**(`gameId`, `options?`): `Promise`\<`BoxScoreResponse`\>

Defined in: [src/griddy/nfl/endpoints/regular/football/games.ts:201](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/endpoints/regular/football/games.ts#L201)

Get Game Box Score.

Retrieves comprehensive box score data for a specific game including
team statistics, individual player statistics, and scoring summary.

#### Parameters

##### gameId

`string`

Game identifier (UUID)

##### options?

`RequestOptions`

Request options

#### Returns

`Promise`\<`BoxScoreResponse`\>

Box score response

***

### getGames()

> **getGames**(`season`, `seasonType`, `week`, `withExternalIds?`, `options?`): `Promise`\<[`FootballGamesResponse`](../interfaces/FootballGamesResponse.md)\>

Defined in: [src/griddy/nfl/endpoints/regular/football/games.ts:149](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/endpoints/regular/football/games.ts#L149)

Get Games by Season, Type, and Week.

Retrieves game information for a specific season, season type, and week
from the Football API.

#### Parameters

##### season

`number`

Season year

##### seasonType

[`SeasonTypeEnum`](../type-aliases/SeasonTypeEnum.md)

Type of season

##### week

`number`

Week number

##### withExternalIds?

`boolean`

Include external IDs in response

##### options?

`RequestOptions`

Request options

#### Returns

`Promise`\<[`FootballGamesResponse`](../interfaces/FootballGamesResponse.md)\>

Football games response

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

### getLiveGameStats()

> **getLiveGameStats**(`season`, `seasonType`, `week`, `options?`): `Promise`\<`GameStatsResponse`\>

Defined in: [src/griddy/nfl/endpoints/regular/football/games.ts:314](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/endpoints/regular/football/games.ts#L314)

Get Live Game Statistics.

Retrieves live game statistics and summaries for games in progress
or completed games.

#### Parameters

##### season

`number`

Season year

##### seasonType

[`SeasonTypeEnum`](../type-aliases/SeasonTypeEnum.md)

Type of season

##### week

`number`

Week number

##### options?

`RequestOptions`

Request options

#### Returns

`Promise`\<`GameStatsResponse`\>

Game stats response

***

### getPlayByPlay()

> **getPlayByPlay**(`gameId`, `includePenalties?`, `includeFormations?`, `options?`): `Promise`\<`PlayByPlayResponse`\>

Defined in: [src/griddy/nfl/endpoints/regular/football/games.ts:255](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/endpoints/regular/football/games.ts#L255)

Get Play-by-Play Data.

Retrieves detailed play-by-play data for a specific game including
all plays, drives, scoring events, and key statistics.

#### Parameters

##### gameId

`string`

Game identifier (UUID)

##### includePenalties?

`boolean`

Include penalty details

##### includeFormations?

`boolean`

Include offensive/defensive formations

##### options?

`RequestOptions`

Request options

#### Returns

`Promise`\<`PlayByPlayResponse`\>

Play-by-play response

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

### getWeeklyGameDetails()

> **getWeeklyGameDetails**(`season`, `type`, `week`, `includeDriveChart?`, `includeReplays?`, `includeStandings?`, `includeTaggedVideos?`, `options?`): `Promise`\<`WeeklyGameDetail`[]\>

Defined in: [src/griddy/nfl/endpoints/regular/football/games.ts:385](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/endpoints/regular/football/games.ts#L385)

Get Weekly Game Details.

Retrieves detailed game information for a specific week including
team standings, drive charts, replays, and tagged videos.

#### Parameters

##### season

`number`

Season year

##### type

[`SeasonTypeEnum`](../type-aliases/SeasonTypeEnum.md)

Season type

##### week

`number`

Week number

##### includeDriveChart?

`boolean`

Include drive chart data

##### includeReplays?

`boolean`

Include replay videos

##### includeStandings?

`boolean`

Include team standings

##### includeTaggedVideos?

`boolean`

Include tagged video content

##### options?

`RequestOptions`

Request options

#### Returns

`Promise`\<`WeeklyGameDetail`[]\>

Weekly game details

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
