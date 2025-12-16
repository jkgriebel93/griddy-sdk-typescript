/**
 * Base models and common data structures for Griddy SDK.
 */

/**
 * Represents a sports game.
 */
export interface Game {
  /** Unique identifier for the game */
  id: string;
  /** Home team name or abbreviation */
  homeTeam: string;
  /** Away team name or abbreviation */
  awayTeam: string;
  /** Home team score */
  homeScore: number | null;
  /** Away team score */
  awayScore: number | null;
  /** Game status (scheduled, live, final, etc.) */
  status: string;
  /** Game start time */
  startTime: Date | null;
  /** Week number */
  week: number | null;
  /** Season year */
  season: number | null;
  /** Season type (regular, playoffs, etc.) */
  seasonType: string | null;
}

/**
 * Represents a sports team.
 */
export interface Team {
  /** Unique identifier for the team */
  id: string;
  /** Team full name */
  name: string;
  /** Team abbreviation */
  abbreviation: string;
  /** Team city */
  city: string | null;
  /** Team conference */
  conference: string | null;
  /** Team division */
  division: string | null;
}

/**
 * Represents a sports player.
 */
export interface Player {
  /** Unique identifier for the player */
  id: string;
  /** Player full name */
  name: string;
  /** Current team identifier */
  teamId: string | null;
  /** Player position */
  position: string | null;
  /** Jersey number */
  jerseyNumber: number | null;
}

/**
 * Represents player statistics.
 */
export interface PlayerStats {
  /** Player identifier */
  playerId: string;
  /** Game identifier */
  gameId: string | null;
  /** Season year */
  season: number | null;
  /** Week number */
  week: number | null;
  /** Statistics data */
  stats: Record<string, unknown>;
}

/**
 * Standard API response wrapper.
 */
export interface APIResponse<T = unknown> {
  /** Whether the request was successful */
  success: boolean;
  /** Response data */
  data: T | null;
  /** Response message */
  message: string | null;
  /** Error message if applicable */
  error: string | null;
  /** Additional metadata */
  metadata: Record<string, unknown>;
}

/**
 * Helper type for creating optional properties.
 */
export type Nullable<T> = T | null;

/**
 * Helper type for creating optional nullable properties.
 */
export type OptionalNullable<T> = T | null | undefined;

/**
 * Sentinel value for unset optional parameters.
 * In TypeScript, we use a symbol to represent this.
 */
export const UNSET = Symbol('UNSET');

/**
 * Type for optional parameters that can be unset.
 */
export type Unset = typeof UNSET;

/**
 * Helper to check if a value is the UNSET sentinel.
 */
export function isUnset(value: unknown): value is Unset {
  return value === UNSET;
}

/**
 * Helper to get a value or a default if the value is UNSET.
 */
export function valueOrDefault<T>(
  value: T | Unset,
  defaultValue: T
): T {
  return isUnset(value) ? defaultValue : value;
}
