[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / Game

# Interface: Game

Defined in: [src/griddy/nfl/models/entities/game.ts:104](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L104)

NFL Game entity.

## Properties

### awayTeam?

> `optional` **awayTeam**: [`ProTeam`](ProTeam.md)

Defined in: [src/griddy/nfl/models/entities/game.ts:108](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L108)

Away team

***

### broadcastInfo?

> `optional` **broadcastInfo**: [`BroadcastInfo`](BroadcastInfo.md)

Defined in: [src/griddy/nfl/models/entities/game.ts:112](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L112)

Broadcast information

***

### category?

> `optional` **category**: [`GameCategory`](../type-aliases/GameCategory.md)

Defined in: [src/griddy/nfl/models/entities/game.ts:114](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L114)

Prime time game designation

***

### date?

> `optional` **date**: `string`

Defined in: [src/griddy/nfl/models/entities/game.ts:116](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L116)

Game date (YYYY-MM-DD)

***

### dateAmPm?

> `optional` **dateAmPm**: [`MeridiemEnum`](../type-aliases/MeridiemEnum.md)

Defined in: [src/griddy/nfl/models/entities/game.ts:118](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L118)

Time of day indicator

***

### dateDay?

> `optional` **dateDay**: `string`

Defined in: [src/griddy/nfl/models/entities/game.ts:120](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L120)

Day of week (full)

***

### dateDayMonth?

> `optional` **dateDayMonth**: `string`

Defined in: [src/griddy/nfl/models/entities/game.ts:122](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L122)

Date in M/D format

***

### dateDayShort?

> `optional` **dateDayShort**: `string`

Defined in: [src/griddy/nfl/models/entities/game.ts:124](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L124)

Day of week (abbreviated)

***

### dateTime?

> `optional` **dateTime**: `string`

Defined in: [src/griddy/nfl/models/entities/game.ts:126](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L126)

Time without AM/PM

***

### dateTimeAmPm?

> `optional` **dateTimeAmPm**: `string`

Defined in: [src/griddy/nfl/models/entities/game.ts:128](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L128)

Time with AM/PM

***

### extensions?

> `optional` **extensions**: [`GameExtension`](GameExtension.md)[]

Defined in: [src/griddy/nfl/models/entities/game.ts:130](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L130)

Additional game data extensions

***

### externalIds?

> `optional` **externalIds**: [`ExternalID`](ExternalID.md)[]

Defined in: [src/griddy/nfl/models/entities/game.ts:132](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L132)

External IDs

***

### gameType?

> `optional` **gameType**: `string`

Defined in: [src/griddy/nfl/models/entities/game.ts:134](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L134)

Type of game

***

### homeTeam?

> `optional` **homeTeam**: [`ProTeam`](ProTeam.md)

Defined in: [src/griddy/nfl/models/entities/game.ts:110](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L110)

Home team

***

### id?

> `optional` **id**: `string`

Defined in: [src/griddy/nfl/models/entities/game.ts:106](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L106)

Unique game identifier

***

### international?

> `optional` **international**: `boolean`

Defined in: [src/griddy/nfl/models/entities/game.ts:136](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L136)

Whether game is played internationally

***

### neutralSite?

> `optional` **neutralSite**: `boolean`

Defined in: [src/griddy/nfl/models/entities/game.ts:138](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L138)

Whether game is at neutral venue

***

### phase?

> `optional` **phase**: `string`

Defined in: [src/griddy/nfl/models/entities/game.ts:140](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L140)

Game phase

***

### season?

> `optional` **season**: `number`

Defined in: [src/griddy/nfl/models/entities/game.ts:142](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L142)

Season year

***

### seasonType?

> `optional` **seasonType**: [`SeasonTypeEnum`](../type-aliases/SeasonTypeEnum.md)

Defined in: [src/griddy/nfl/models/entities/game.ts:144](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L144)

Type of NFL season

***

### status?

> `optional` **status**: [`GameStatus`](../type-aliases/GameStatus.md)

Defined in: [src/griddy/nfl/models/entities/game.ts:146](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L146)

Game status

***

### ticketUrl?

> `optional` **ticketUrl**: `string`

Defined in: [src/griddy/nfl/models/entities/game.ts:148](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L148)

Primary ticket purchase URL

***

### ticketVendors?

> `optional` **ticketVendors**: [`TicketVendor`](TicketVendor.md)[]

Defined in: [src/griddy/nfl/models/entities/game.ts:150](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L150)

Ticket vendors

***

### time?

> `optional` **time**: `string`

Defined in: [src/griddy/nfl/models/entities/game.ts:152](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L152)

Game time in UTC (ISO string)

***

### venue?

> `optional` **venue**: [`Venue`](Venue.md)

Defined in: [src/griddy/nfl/models/entities/game.ts:154](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L154)

Venue information

***

### version?

> `optional` **version**: `number`

Defined in: [src/griddy/nfl/models/entities/game.ts:156](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L156)

Data version number

***

### week?

> `optional` **week**: `number`

Defined in: [src/griddy/nfl/models/entities/game.ts:158](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L158)

Week number

***

### weekType?

> `optional` **weekType**: `string`

Defined in: [src/griddy/nfl/models/entities/game.ts:160](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/game.ts#L160)

Week type (e.g., REG, HOF)
