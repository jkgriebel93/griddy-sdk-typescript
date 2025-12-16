[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / GetDefensiveStatsRequest

# Interface: GetDefensiveStatsRequest

Defined in: [src/griddy/nfl/models/requests/index.ts:301](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L301)

Request for getting defensive stats.

## Properties

### limit?

> `optional` **limit**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:311](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L311)

Limit results

***

### offset?

> `optional` **offset**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:313](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L313)

Offset for pagination

***

### season

> **season**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:303](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L303)

Season year

***

### seasonType

> **seasonType**: [`SeasonTypeEnum`](../type-aliases/SeasonTypeEnum.md)

Defined in: [src/griddy/nfl/models/requests/index.ts:305](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L305)

Season type

***

### teamAbbr?

> `optional` **teamAbbr**: `string`

Defined in: [src/griddy/nfl/models/requests/index.ts:309](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L309)

Team abbreviation (optional filter)

***

### week?

> `optional` **week**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:307](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L307)

Week number (optional for season totals)
