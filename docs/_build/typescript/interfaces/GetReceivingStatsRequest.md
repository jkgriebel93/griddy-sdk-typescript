[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / GetReceivingStatsRequest

# Interface: GetReceivingStatsRequest

Defined in: [src/griddy/nfl/models/requests/index.ts:283](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L283)

Request for getting receiving stats.

## Properties

### limit?

> `optional` **limit**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:293](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L293)

Limit results

***

### offset?

> `optional` **offset**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:295](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L295)

Offset for pagination

***

### season

> **season**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:285](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L285)

Season year

***

### seasonType

> **seasonType**: [`SeasonTypeEnum`](../type-aliases/SeasonTypeEnum.md)

Defined in: [src/griddy/nfl/models/requests/index.ts:287](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L287)

Season type

***

### teamAbbr?

> `optional` **teamAbbr**: `string`

Defined in: [src/griddy/nfl/models/requests/index.ts:291](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L291)

Team abbreviation (optional filter)

***

### week?

> `optional` **week**: `number`

Defined in: [src/griddy/nfl/models/requests/index.ts:289](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/requests/index.ts#L289)

Week number (optional for season totals)
