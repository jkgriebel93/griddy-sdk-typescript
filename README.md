# Griddy SDK for TypeScript

A TypeScript SDK for accessing NFL data from multiple API endpoints including games, statistics, rosters, and Next Gen Stats.

## Installation

```bash
npm install griddy-sdk
```

## Quick Start

```typescript
import { GriddyNFL } from 'griddy-sdk';

// Initialize the SDK with your access token
const nfl = new GriddyNFL({
  nflAuth: { accessToken: 'your_access_token' }
});

// Get games for a specific week
const games = await nfl.games.getGames(2024, 'REG', 1);
console.log(games);
```

## Authentication

The SDK requires an NFL access token. You must obtain this token separately (e.g., through the NFL website authentication flow) and pass it to the SDK:

```typescript
const nfl = new GriddyNFL({
  nflAuth: {
    accessToken: 'your_access_token',
    refreshToken: 'optional_refresh_token',  // optional
    expiresIn: 3600                           // optional
  }
});
```

## API Endpoints

### Games

Get game schedules, scores, box scores, and play-by-play data.

```typescript
// Get all games for a week
const games = await nfl.games.getGames(2024, 'REG', 1);

// Get box score for a specific game
const boxScore = await nfl.games.getBoxScore('game-uuid-here');

// Get play-by-play data
const pbp = await nfl.games.getPlayByPlay('game-uuid-here', {
  includePenalties: true,
  includeFormations: false
});

// Get live game statistics
const liveStats = await nfl.games.getLiveGameStats(2024, 'REG', 1);

// Get weekly game details with optional extras
const details = await nfl.games.getWeeklyGameDetails(
  2024,           // season
  'REG',          // season type
  1,              // week
  true,           // includeDriveChart
  true,           // includeReplays
  true,           // includeStandings
  false           // includeTaggedVideos
);
```

### Season Types

The SDK uses the following season type values:

```typescript
type SeasonTypeEnum = 'PRE' | 'REG' | 'POST';

// Preseason
await nfl.games.getGames(2024, 'PRE', 1);

// Regular season
await nfl.games.getGames(2024, 'REG', 1);

// Postseason
await nfl.games.getGames(2024, 'POST', 1);
```

## Configuration Options

### Timeout

Set a custom timeout for API requests (in milliseconds):

```typescript
const nfl = new GriddyNFL({
  nflAuth: { accessToken: 'token' },
  timeoutMs: 60000  // 60 seconds
});
```

### Per-Request Options

Override settings for individual requests:

```typescript
const games = await nfl.games.getGames(2024, 'REG', 1, false, {
  timeoutMs: 30000,
  httpHeaders: { 'X-Custom-Header': 'value' }
});
```

### Retry Configuration

Configure automatic retries for failed requests:

```typescript
import { createRetryConfig } from 'griddy-sdk';

const games = await nfl.games.getGames(2024, 'REG', 1, false, {
  retries: createRetryConfig({
    maxRetries: 5,
    initialDelayMs: 1000,
    maxDelayMs: 30000,
    backoffMultiplier: 2
  })
});
```

## Error Handling

The SDK provides typed errors for different failure scenarios:

```typescript
import {
  GriddyNFLError,
  GriddyNFLDefaultError,
  NoResponseError
} from 'griddy-sdk';

try {
  const games = await nfl.games.getGames(2024, 'REG', 1);
} catch (error) {
  if (error instanceof GriddyNFLDefaultError) {
    console.error('API Error:', error.message);
    console.error('Status Code:', error.statusCode);
    console.error('Response:', error.responseText);
  } else if (error instanceof NoResponseError) {
    console.error('No response received from API');
  } else if (error instanceof GriddyNFLError) {
    console.error('SDK Error:', error.message);
  }
}
```

## TypeScript Support

The SDK is written in TypeScript and provides full type definitions:

```typescript
import type {
  Game,
  Player,
  Team,
  FootballGamesResponse,
  SeasonTypeEnum
} from 'griddy-sdk';

// Types are inferred from method returns
const games: FootballGamesResponse = await nfl.games.getGames(2024, 'REG', 1);

// Access typed game data
games.games?.forEach((game: Game) => {
  console.log(`${game.awayTeam?.abbreviation} @ ${game.homeTeam?.abbreviation}`);
  console.log(`Score: ${game.awayTeam?.score} - ${game.homeTeam?.score}`);
});
```

## Cleanup

When you're done using the SDK, close the client to release resources:

```typescript
const nfl = new GriddyNFL({ nflAuth: { accessToken: 'token' } });

try {
  const games = await nfl.games.getGames(2024, 'REG', 1);
  // ... use the data
} finally {
  nfl.close();
}
```

## Environment Variables

The SDK can read configuration from environment variables:

```bash
export NFL_API_KEY=your_api_key
export NFL_CLIENT_KEY=your_client_key
export NFL_CLIENT_SECRET=your_client_secret
```

## Project Structure

```
griddy-sdk-typescript/
├── src/
│   ├── index.ts                 # Main entry point
│   └── griddy/
│       ├── core/                # Core utilities and base client
│       │   ├── exceptions.ts    # Error classes
│       │   ├── baseClient.ts    # HTTP client
│       │   ├── models.ts        # Base interfaces
│       │   └── utils.ts         # Utility functions
│       ├── settings.ts          # Configuration
│       └── nfl/                 # NFL SDK
│           ├── sdk.ts           # GriddyNFL main class
│           ├── baseSdk.ts       # Base SDK class
│           ├── sdkConfiguration.ts
│           ├── models/          # Data models
│           │   ├── enums/       # Enum types
│           │   ├── entities/    # Entity interfaces
│           │   └── requests/    # Request models
│           ├── endpoints/       # API endpoints
│           │   ├── regular/     # Regular NFL API
│           │   ├── pro/         # Pro API
│           │   └── ngs/         # Next Gen Stats
│           ├── errors/          # Error classes
│           ├── _hooks/          # Request/response hooks
│           └── types/           # Type definitions
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

## Building from Source

```bash
# Install dependencies
npm install

# Build the SDK
npm run build

# Run type checking
npm run typecheck

# Run linting
npm run lint
```

## Differences from Python SDK

This TypeScript SDK is a port of the Python `griddy-sdk-python` package. See [PYTHON_VS_TYPESCRIPT_PATTERNS.md](docs/PYTHON_VS_TYPESCRIPT_PATTERNS.md) for details on the differences between the two implementations.

Key differences:
- All methods are async (return Promises)
- Uses native `fetch` API instead of httpx
- Uses TypeScript interfaces instead of Pydantic models
- Browser-based authentication is not supported (token must be provided)
- Property names use camelCase (matching the API)

## License

MIT
