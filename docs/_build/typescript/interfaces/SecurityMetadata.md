[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / SecurityMetadata

# Interface: SecurityMetadata

Defined in: [src/griddy/nfl/models/entities/security.ts:25](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/security.ts#L25)

Security metadata for field annotations.

## Properties

### fieldName

> **fieldName**: `string`

Defined in: [src/griddy/nfl/models/entities/security.ts:33](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/security.ts#L33)

Field name in the request

***

### scheme

> **scheme**: `boolean`

Defined in: [src/griddy/nfl/models/entities/security.ts:27](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/security.ts#L27)

Whether this is a security scheme

***

### schemeType

> **schemeType**: `"http"` \| `"apiKey"` \| `"oauth2"`

Defined in: [src/griddy/nfl/models/entities/security.ts:29](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/security.ts#L29)

Type of security scheme

***

### subType?

> `optional` **subType**: `string`

Defined in: [src/griddy/nfl/models/entities/security.ts:31](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/models/entities/security.ts#L31)

Subtype (e.g., 'bearer')
