/**
 * Griddy SDK - TypeScript SDK for accessing NFL data.
 *
 * @example
 * ```typescript
 * import { GriddyNFL } from 'griddy-sdk';
 *
 * const nfl = new GriddyNFL({
 *   nflAuth: { accessToken: 'your_access_token' }
 * });
 *
 * // Get games
 * const games = await nfl.games.getGames(2024, 'REG', 1);
 *
 * // Get box score
 * const boxScore = await nfl.games.getBoxScore('game-id');
 * ```
 *
 * @packageDocumentation
 */

export * from "./griddy";
