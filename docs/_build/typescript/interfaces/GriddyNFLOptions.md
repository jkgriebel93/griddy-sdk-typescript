[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / GriddyNFLOptions

# Interface: GriddyNFLOptions

Defined in: [src/griddy/nfl/sdk.ts:43](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdk.ts#L43)

GriddyNFL SDK options.

## Properties

### debug?

> `optional` **debug**: `boolean`

Defined in: [src/griddy/nfl/sdk.ts:53](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdk.ts#L53)

Debug logging enabled

***

### loginEmail?

> `optional` **loginEmail**: `string`

Defined in: [src/griddy/nfl/sdk.ts:47](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdk.ts#L47)

Login email for browser-based auth (not implemented in TypeScript)

***

### loginPassword?

> `optional` **loginPassword**: `string`

Defined in: [src/griddy/nfl/sdk.ts:49](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdk.ts#L49)

Login password for browser-based auth (not implemented in TypeScript)

***

### nflAuth?

> `optional` **nflAuth**: [`AuthInfo`](AuthInfo.md)

Defined in: [src/griddy/nfl/sdk.ts:45](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdk.ts#L45)

NFL authentication (required unless using email/password)

***

### timeoutMs?

> `optional` **timeoutMs**: `number`

Defined in: [src/griddy/nfl/sdk.ts:51](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/sdk.ts#L51)

Request timeout in milliseconds
