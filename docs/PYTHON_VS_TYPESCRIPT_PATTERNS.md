# Python vs TypeScript Pattern Conflicts

This document describes the patterns from the Python SDK that were adapted or changed when creating the TypeScript SDK due to idiomatic TypeScript conventions or language differences.

## 1. Data Models: Pydantic vs Interfaces

### Python Pattern
```python
from pydantic import BaseModel, Field

class Player(BaseModel):
    first_name: Annotated[Optional[str], pydantic.Field(alias="firstName")] = None
    last_name: Annotated[Optional[str], pydantic.Field(alias="lastName")] = None

    @model_serializer(mode="wrap")
    def serialize_model(self, handler):
        # Complex serialization logic
        ...
```

### TypeScript Pattern
```typescript
export interface Player {
  firstName?: string;
  lastName?: string;
}
```

**Reason for Change**:
- TypeScript uses structural typing with interfaces, which are simpler and more idiomatic
- Pydantic's runtime validation doesn't have a direct TypeScript equivalent
- TypeScript achieves type safety at compile time rather than runtime
- Field aliases (camelCase) are used directly in interface property names since JSON APIs typically use camelCase

**Impact**: No runtime validation. Use Zod or similar libraries if runtime validation is needed.

---

## 2. Enums: Python Literal vs TypeScript Union Types

### Python Pattern
```python
from typing import Literal

SeasonTypeEnum = Literal["PRE", "REG", "POST"]
```

### TypeScript Pattern
```typescript
export type SeasonTypeEnum = 'PRE' | 'REG' | 'POST';

export const SeasonTypeEnum = {
  PRE: 'PRE' as const,
  REG: 'REG' as const,
  POST: 'POST' as const,
};
```

**Reason for Change**:
- TypeScript requires both a type and a value object for enum-like behavior
- This dual export pattern allows using the type for type annotations and the object for runtime value access
- More idiomatic than TypeScript's built-in `enum` keyword

**Impact**: Slightly more verbose but provides better TypeScript integration.

---

## 3. Optional Parameters: UNSET Sentinel

### Python Pattern
```python
from types import UNSET

def get_games(
    self,
    retries: OptionalNullable[RetryConfig] = UNSET,
) -> Response:
    ...
```

### TypeScript Pattern
```typescript
export const UNSET = Symbol('UNSET');
export type Unset = typeof UNSET;

export function isUnset(value: unknown): value is Unset {
  return value === UNSET;
}
```

**Reason for Change**:
- Python's sentinel pattern uses a special class instance
- TypeScript uses a Symbol for guaranteed uniqueness
- Added a type guard function for type-safe checking

**Impact**: Functionally equivalent but uses TypeScript idioms.

---

## 4. Async Support: Single Implementation vs Dual

### Python Pattern
```python
def get_games(self, ...) -> Response:
    config = self._get_games_config(...)
    return self._execute_endpoint(config)

async def get_games_async(self, ...) -> Response:
    config = self._get_games_config(...)
    return await self._execute_endpoint_async(config)
```

### TypeScript Pattern
```typescript
async getGames(...): Promise<FootballGamesResponse> {
  const config = this.getGamesConfig(...);
  return this.executeEndpoint(config);
}
```

**Reason for Change**:
- TypeScript/JavaScript is inherently async with Promises
- The `async/await` pattern is idiomatic; no need for separate sync methods
- Using native `fetch` API which is Promise-based

**Impact**: All SDK methods are async by default. No synchronous variants.

---

## 5. Dynamic Imports / Lazy Loading

### Python Pattern
```python
_sub_sdk_map = {
    "games": ("griddy.nfl.endpoints.regular.football.games", "Games"),
}

def __getattr__(self, name: str):
    if name in self._sub_sdk_map:
        module_path, class_name = self._sub_sdk_map[name]
        module = dynamic_import(module_path)
        ...
```

### TypeScript Pattern
```typescript
private _games?: Games;

get games(): Games {
  if (!this._games) {
    this._games = new Games(this.sdkConfiguration, this);
  }
  return this._games;
}
```

**Reason for Change**:
- TypeScript getters provide lazy initialization naturally
- TypeScript bundlers (tsup, webpack) handle code splitting differently
- Using explicit getters provides better TypeScript type inference
- `__getattr__` magic method doesn't exist in TypeScript

**Impact**: More explicit code but better IDE support and type safety.

---

## 6. Type Annotations / Metadata

### Python Pattern
```python
class GetFootballGamesRequest(BaseModel):
    season: Annotated[int, PathParamMetadata(...)]
    season_type: Annotated[SeasonTypeEnum, QueryParamMetadata(...)]
```

### TypeScript Pattern
```typescript
export interface GetFootballGamesRequest {
  season: number;
  seasonType: SeasonTypeEnum;
}

export const GetFootballGamesRequestMeta: Record<keyof GetFootballGamesRequest, ParamMetadata> = {
  season: { location: 'path', apiName: 'season', required: true },
  seasonType: { location: 'path', apiName: 'seasonType', required: true },
};
```

**Reason for Change**:
- TypeScript doesn't support Python's `Annotated` type for metadata
- Decorators in TypeScript are experimental and verbose
- Separate metadata objects are more explicit and type-safe

**Impact**: Request parameters and their metadata are defined separately.

---

## 7. HTTP Client: requests/httpx vs fetch

### Python Pattern
```python
import httpx

client = httpx.Client(follow_redirects=True)
response = client.send(request)
```

### TypeScript Pattern
```typescript
const response = await fetch(request);
```

**Reason for Change**:
- `fetch` is the native browser/Node.js API
- No external dependencies needed for HTTP requests
- Simpler API surface

**Impact**: No dependency on external HTTP libraries. The native `fetch` API is used.

---

## 8. Context Managers

### Python Pattern
```python
def __enter__(self):
    return self

def __exit__(self, exc_type, exc_val, exc_tb):
    self.sdk_configuration.client.close()
```

### TypeScript Pattern
```typescript
close(): void {
  closeClients(
    this.sdkConfiguration,
    this.sdkConfiguration.client,
    ...
  );
}
```

**Reason for Change**:
- JavaScript doesn't have context managers like Python's `with` statement
- Manual cleanup via `close()` method is more explicit
- Could use `using` declaration (TC39 proposal) in the future

**Impact**: Users must explicitly call `close()` when done.

---

## 9. Browser-Based Authentication

### Python Pattern
```python
from playwright import sync_playwright

def do_browser_auth(email, password, headless=True):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=headless)
        # ... automation ...
```

### TypeScript Pattern
```typescript
if (options.loginEmail || options.loginPassword) {
  throw new Error(
    'Browser-based authentication is not implemented in the TypeScript SDK.'
  );
}
```

**Reason for Change**:
- Playwright can work in Node.js but adds significant dependency
- Browser automation is less common in TypeScript SDK usage patterns
- Users should obtain tokens through other means (web app, CLI tool)

**Impact**: Browser-based authentication not supported. Token must be provided directly.

---

## 10. Exception Hierarchy

### Python Pattern
```python
class GriddyError(Exception):
    def __init__(self, message, status_code=None, response_data=None):
        super().__init__(message)
        self.message = message
        ...
```

### TypeScript Pattern
```typescript
export class GriddyError extends Error {
  readonly message: string;
  readonly statusCode: number | null;
  readonly responseData: ResponseData;

  constructor(...) {
    super(message);
    this.name = 'GriddyError';
    // Maintains proper stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
```

**Reason for Change**:
- TypeScript requires explicit `Error.captureStackTrace` for proper stack traces
- Properties should be `readonly` for immutability
- Error `name` property should be explicitly set

**Impact**: Functionally equivalent with TypeScript idioms.

---

## 11. Property Naming Convention

### Python Pattern
```python
# Snake case for properties
class Player(BaseModel):
    first_name: str
    last_name: str
    jersey_number: int
```

### TypeScript Pattern
```typescript
// camelCase for properties (matches JSON API)
export interface Player {
  firstName?: string;
  lastName?: string;
  jerseyNumber?: number;
}
```

**Reason for Change**:
- TypeScript/JavaScript convention is camelCase
- NFL API returns JSON with camelCase keys
- Avoids need for transformation between API and model

**Impact**: Property names differ between Python and TypeScript SDKs.

---

## Summary

The TypeScript SDK maintains the same architectural patterns as the Python SDK (lazy-loaded sub-SDKs, endpoint configuration pattern, hooks system) while adapting to TypeScript idioms:

1. **Structural typing** instead of Pydantic validation
2. **Async-first** design using native Promises
3. **Getter-based** lazy loading instead of `__getattr__`
4. **Separate metadata** objects instead of `Annotated` types
5. **Native fetch** instead of httpx
6. **camelCase** property names to match API
7. **Symbol-based** UNSET sentinel
8. **No browser auth** - tokens must be provided directly

These changes ensure the TypeScript SDK feels native to TypeScript developers while maintaining API compatibility with the Python version.
