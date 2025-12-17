# TypeDoc Error Analysis and Suggested Fixes

**Total Errors:** 8
**Generated:** 2025-12-16

---

## Summary

The typedoc build currently fails with 8 TypeScript errors across 3 files:

| File | Error Count | Error Type |
|------|-------------|------------|
| `src/griddy/nfl/baseSdk.ts` | 2 | `TS2339` - Missing `entries` property on `Headers` |
| `src/griddy/nfl/endpoints/regular/football/games.ts` | 5 | `TS2322` - Index signature mismatch |
| `src/griddy/nfl/sdk.ts` | 1 | `TS2322` - Index signature mismatch |

---

## Error Category 1: Headers.entries() Not Found

### Affected Files
- `src/griddy/nfl/baseSdk.ts:362`
- `src/griddy/nfl/baseSdk.ts:391`

### Error Message
```
TS2339: Property 'entries' does not exist on type 'Headers'.
```

### Root Cause
The `Headers` interface from the DOM lib types does not include the `entries()` method by default in older TypeScript configurations. The `Headers.entries()` method is part of the iterable `Headers` interface which requires specific lib settings.

### Current Code
```typescript
// Line 362
Object.fromEntries(req.headers.entries()),

// Line 391
Object.fromEntries(response.headers.entries()),
```

### Suggested Fixes

**Option A: Update tsconfig.json (Recommended)**

Add the DOM iterable lib to your tsconfig.json:

```json
{
  "compilerOptions": {
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "target": "ES2020"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts", "**/*.spec.ts"]
}
```

**Option B: Cast to iterable Headers**

```typescript
// Line 362
Object.fromEntries((req.headers as unknown as Iterable<[string, string]>)),

// Line 391
Object.fromEntries((response.headers as unknown as Iterable<[string, string]>)),
```

**Option C: Use Array.from with forEach fallback**

```typescript
// Helper function
function headersToObject(headers: Headers): Record<string, string> {
  const result: Record<string, string> = {};
  headers.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}

// Line 362
headersToObject(req.headers),

// Line 391
headersToObject(response.headers),
```

---

## Error Category 2: Index Signature Mismatch with Record<string, unknown>

### Affected Files
- `src/griddy/nfl/endpoints/regular/football/games.ts:123` (`GetFootballGamesRequest`)
- `src/griddy/nfl/endpoints/regular/football/games.ts:178` (`GetFootballBoxScoreRequest`)
- `src/griddy/nfl/endpoints/regular/football/games.ts:230` (`GetPlayByPlayRequest`)
- `src/griddy/nfl/endpoints/regular/football/games.ts:289` (`GetLiveGameStatsRequest`)
- `src/griddy/nfl/endpoints/regular/football/games.ts:356` (`GetWeeklyGameDetailsRequest`)
- `src/griddy/nfl/sdk.ts:163` (`NFLAuth`)

### Error Message
```
TS2322: Type 'X' is not assignable to type 'Record<string, unknown>'.
  Index signature for type 'string' is missing in type 'X'.
```

### Root Cause
TypeScript interfaces without an explicit index signature are not directly assignable to `Record<string, unknown>`. The `EndpointConfig.request` property and `SDKConfigurationOptions.customAuthInfo` property expect `Record<string, unknown>`, but the specific request/auth interfaces don't have index signatures.

### Suggested Fixes

**Option A: Add Index Signatures to Request Interfaces (Recommended)**

Update the request interfaces in `src/griddy/nfl/models/requests/index.ts`:

```typescript
export interface GetFootballGamesRequest {
  [key: string]: unknown;
  season: number;
  seasonType: SeasonTypeEnum;
  week: number;
  withExternalIds?: boolean;
}

export interface GetFootballBoxScoreRequest {
  [key: string]: unknown;
  gameId: string;
}

export interface GetPlayByPlayRequest {
  [key: string]: unknown;
  gameId: string;
  includePenalties?: boolean;
  includeFormations?: boolean;
}

export interface GetLiveGameStatsRequest {
  [key: string]: unknown;
  season: number;
  seasonType: SeasonTypeEnum;
  week: number;
}

export interface GetWeeklyGameDetailsRequest {
  [key: string]: unknown;
  season: number;
  type: SeasonTypeEnum;
  week: number;
  includeDriveChart?: boolean;
  includeReplays?: boolean;
  includeStandings?: boolean;
  includeTaggedVideos?: boolean;
}
```

Update `NFLAuth` in `src/griddy/nfl/sdk.ts`:

```typescript
export interface NFLAuth {
  [key: string]: unknown;
  accessToken: string;
  refreshToken?: string;
  expiresIn?: number;
}
```

**Option B: Change EndpointConfig to Use Generic Constraint**

Update `src/griddy/nfl/baseSdk.ts`:

```typescript
export interface EndpointConfig<T = unknown, R extends Record<string, unknown> = Record<string, unknown>> {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  operationId: string;
  request: R;
  // ... rest of the interface
}
```

Then use type assertions when creating configs:

```typescript
return {
  // ...
  request: request as Record<string, unknown>,
  // ...
};
```

**Option C: Type Assertion at Call Sites**

In `src/griddy/nfl/endpoints/regular/football/games.ts`, cast the request:

```typescript
return {
  method: "GET",
  path: "/football/v2/games/season/{season}/seasonType/{seasonType}/week/{week}",
  operationId: "getFootballGames",
  request: request as Record<string, unknown>,
  // ... rest of config
};
```

In `src/griddy/nfl/sdk.ts`:

```typescript
let sdkConfig = new SDKConfiguration({
  security,
  timeoutMs: options.timeoutMs,
  customAuthInfo: options.nflAuth as Record<string, unknown>,
});
```

---

## Complete Fix: Updated tsconfig.json

The most comprehensive fix is to update `tsconfig.json` with proper compiler options:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts", "**/*.spec.ts"]
}
```

---

## Recommended Action Plan

1. **Update tsconfig.json** - Add the missing `compilerOptions` including `lib: ["ES2020", "DOM", "DOM.Iterable"]`

2. **Add index signatures to request interfaces** - This is the cleanest solution for the `Record<string, unknown>` issues as it makes the intent explicit

3. **Re-run typedoc** - After applying fixes:
   ```bash
   cd griddy-sdk-typescript
   npx typedoc
   ```

---

## Files to Modify

| File | Changes Required |
|------|-----------------|
| `tsconfig.json` | Add `compilerOptions` with proper `lib` settings |
| `src/griddy/nfl/models/requests/index.ts` | Add `[key: string]: unknown;` to request interfaces |
| `src/griddy/nfl/sdk.ts` | Add `[key: string]: unknown;` to `NFLAuth` interface |
