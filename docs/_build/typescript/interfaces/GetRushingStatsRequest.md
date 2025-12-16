[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / GetRushingStatsRequest

# Interface: GetRushingStatsRequest

Defined in: [src/griddy/nfl/models/requests/index.ts:265](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L265)

Request for getting rushing stats.

## Properties

### limit?

> `optional` **limit**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:275](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L275)

Limit results

***

### offset?

> `optional` **offset**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:277](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L277)

Offset for pagination

***

### season

> **season**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:267](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L267)

Season year

***

### seasonType

> **seasonType**: [`SeasonTypeEnum`](../type-aliases/SeasonTypeEnum.md)

Defined in: [src/griddy/nfl/models/requests/index.ts:269](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L269)

Season type

***

### teamAbbr?

> `optional` **teamAbbr**: `string`

Defined in: [src/griddy/nfl/models/requests/index.ts:273](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L273)

Team abbreviation (optional filter)

***

### week?

> `optional` **week**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:271](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L271)

Week number (optional for season totals)
