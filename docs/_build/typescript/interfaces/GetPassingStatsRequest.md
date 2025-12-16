[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / GetPassingStatsRequest

# Interface: GetPassingStatsRequest

Defined in: [src/griddy/nfl/models/requests/index.ts:232](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L232)

Request for getting passing stats.

## Properties

### limit?

> `optional` **limit**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:242](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L242)

Limit results

***

### offset?

> `optional` **offset**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:244](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L244)

Offset for pagination

***

### season

> **season**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:234](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L234)

Season year

***

### seasonType

> **seasonType**: [`SeasonTypeEnum`](../type-aliases/SeasonTypeEnum.md)

Defined in: [src/griddy/nfl/models/requests/index.ts:236](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L236)

Season type

***

### teamAbbr?

> `optional` **teamAbbr**: `string`

Defined in: [src/griddy/nfl/models/requests/index.ts:240](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L240)

Team abbreviation (optional filter)

***

### week?

> `optional` **week**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:238](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L238)

Week number (optional for season totals)
