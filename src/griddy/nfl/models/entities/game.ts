/**
 * Game entity model for NFL SDK.
 */

import type { SeasonTypeEnum, MeridiemEnum } from '../enums';

/**
 * Game category for prime time games.
 */
export type GameCategory = 'MNF' | 'SNF' | 'TNF';

/**
 * Game status.
 */
export type GameStatus =
  | 'SCHEDULED'
  | 'IN_PROGRESS'
  | 'FINAL'
  | 'POSTPONED'
  | 'CANCELLED';

/**
 * External ID for cross-system references.
 */
export interface ExternalID {
  /** ID source (e.g., 'ESB', 'GSIS') */
  source?: string;
  /** External ID value */
  id?: string;
}

/**
 * Broadcast information for a game.
 */
export interface BroadcastInfo {
  /** Network name */
  network?: string;
  /** Network channel */
  channel?: string;
  /** Satellite channel */
  satelliteChannel?: string;
  /** Network type */
  networkType?: string;
}

/**
 * Ticket vendor information.
 */
export interface TicketVendor {
  /** Vendor name */
  name?: string;
  /** Ticket URL */
  url?: string;
}

/**
 * Team information within a game context.
 */
export interface ProTeam {
  /** Team ID */
  id?: string;
  /** Team abbreviation */
  abbreviation?: string;
  /** Full team name */
  fullName?: string;
  /** Team nickname */
  nickName?: string;
  /** Team city/location */
  cityStateRegion?: string;
  /** Team score */
  score?: number;
  /** Points scored per quarter */
  scoreByQuarter?: number[];
}

/**
 * Venue information.
 */
export interface Venue {
  /** Venue ID */
  id?: string;
  /** Venue name */
  name?: string;
  /** City */
  city?: string;
  /** State */
  state?: string;
  /** Country */
  country?: string;
  /** Roof type */
  roofType?: string;
}

/**
 * Game extension data.
 */
export interface GameExtension {
  [key: string]: unknown;
}

/**
 * NFL Game entity.
 */
export interface Game {
  /** Unique game identifier */
  id?: string;
  /** Away team */
  awayTeam?: ProTeam;
  /** Home team */
  homeTeam?: ProTeam;
  /** Broadcast information */
  broadcastInfo?: BroadcastInfo;
  /** Prime time game designation */
  category?: GameCategory | null;
  /** Game date (YYYY-MM-DD) */
  date?: string;
  /** Time of day indicator */
  dateAmPm?: MeridiemEnum;
  /** Day of week (full) */
  dateDay?: string;
  /** Date in M/D format */
  dateDayMonth?: string;
  /** Day of week (abbreviated) */
  dateDayShort?: string;
  /** Time without AM/PM */
  dateTime?: string;
  /** Time with AM/PM */
  dateTimeAmPm?: string;
  /** Additional game data extensions */
  extensions?: GameExtension[];
  /** External IDs */
  externalIds?: ExternalID[];
  /** Type of game */
  gameType?: string;
  /** Whether game is played internationally */
  international?: boolean;
  /** Whether game is at neutral venue */
  neutralSite?: boolean;
  /** Game phase */
  phase?: string;
  /** Season year */
  season?: number;
  /** Type of NFL season */
  seasonType?: SeasonTypeEnum;
  /** Game status */
  status?: GameStatus;
  /** Primary ticket purchase URL */
  ticketUrl?: string | null;
  /** Ticket vendors */
  ticketVendors?: TicketVendor[];
  /** Game time in UTC (ISO string) */
  time?: string;
  /** Venue information */
  venue?: Venue;
  /** Data version number */
  version?: number;
  /** Week number */
  week?: number;
  /** Week type (e.g., REG, HOF) */
  weekType?: string;
}

/**
 * Response wrapper for football games.
 */
export interface FootballGamesResponse {
  /** List of games */
  games?: Game[];
  /** Season year */
  season?: number;
  /** Season type */
  seasonType?: SeasonTypeEnum;
  /** Week number */
  week?: number;
}
