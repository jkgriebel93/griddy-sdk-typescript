[**griddy-sdk**](../README.md)

***

[griddy-sdk](../globals.md) / RetryConfig

# Interface: RetryConfig

Defined in: [src/griddy/nfl/types/index.ts:54](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/types/index.ts#L54)

Retry configuration.

## Properties

### backoffMultiplier

> **backoffMultiplier**: `number`

Defined in: [src/griddy/nfl/types/index.ts:62](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/types/index.ts#L62)

Exponential backoff multiplier

***

### initialDelayMs

> **initialDelayMs**: `number`

Defined in: [src/griddy/nfl/types/index.ts:58](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/types/index.ts#L58)

Initial delay in milliseconds

***

### maxDelayMs

> **maxDelayMs**: `number`

Defined in: [src/griddy/nfl/types/index.ts:60](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/types/index.ts#L60)

Maximum delay in milliseconds

***

### maxRetries

> **maxRetries**: `number`

Defined in: [src/griddy/nfl/types/index.ts:56](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/types/index.ts#L56)

Maximum number of retries

***

### retryStatusCodes

> **retryStatusCodes**: `number`[]

Defined in: [src/griddy/nfl/types/index.ts:64](https://github.com/jkgriebel93/griddy-sdk-typescript/blob/1475708206aa33d5e89f3e369e1f3a5b6b36db48/src/griddy/nfl/types/index.ts#L64)

Status codes that should trigger a retry
