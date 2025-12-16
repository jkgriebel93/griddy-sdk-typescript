/**
 * Player entity model for NFL SDK.
 */

/**
 * NFL Player entity.
 */
export interface Player {
  /** Player's birth date */
  birthDate?: string;
  /** Player's college conference */
  collegeConference?: string;
  /** Player's college */
  collegeName?: string;
  /** Current team identifier */
  currentTeamId?: string;
  /** Player's display name */
  displayName?: string;
  /** Team that drafted the player */
  draftClub?: string | null;
  /** Overall draft pick number */
  draftNumber?: number | null;
  /** Draft round */
  draftround?: number | null;
  /** Year player entered the league */
  entryYear?: number;
  /** ESB identifier */
  esbId?: string;
  /** Player's first name */
  firstName?: string;
  /** Player's football name (nickname) */
  footballName?: string;
  /** GSIS identifier */
  gsisId?: string;
  /** GSIS IT identifier */
  gsisItId?: number;
  /** URL to player headshot image */
  headshot?: string;
  /** Player height (format is feet-inches) */
  height?: string;
  /** Player's jersey number */
  jerseyNumber?: number;
  /** Player's last name */
  lastName?: string;
  /** NFL player identifier */
  nflId?: number;
  /** Next Gen Stats position */
  ngsPosition?: string | null;
  /** Next Gen Stats position group */
  ngsPositionGroup?: string | null;
  /** Player's position */
  position?: string;
  /** Player's position group */
  positionGroup?: string;
  /** Player's rookie year */
  rookieYear?: number;
  /** Current season */
  season?: number;
  /** Shortened player name */
  shortName?: string;
  /** Smart identifier for the player */
  smartId?: string;
  /** Player status code */
  status?: string;
  /** Abbreviated status description */
  statusDescriptionAbbr?: string;
  /** Short status description */
  statusShortDescription?: string;
  /** Current team abbreviation */
  teamAbbr?: string;
  /** Player's uniform number (formatted) */
  uniformNumber?: string;
  /** Player weight in pounds */
  weight?: number;
  /** Years of NFL experience */
  yearsOfExperience?: number;
}

/**
 * Player detail with extended information.
 */
export interface PlayerDetail extends Player {
  /** Player biography */
  bio?: string;
  /** Career highlights */
  highlights?: string[];
  /** Social media links */
  socialMedia?: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
  /** Draft information */
  draft?: {
    year?: number;
    round?: number;
    pick?: number;
    team?: string;
  };
}

/**
 * Player search result.
 */
export interface PlayerSearchResult {
  /** Player ID */
  id?: string;
  /** Display name */
  displayName?: string;
  /** Position */
  position?: string;
  /** Team abbreviation */
  teamAbbr?: string;
  /** Headshot URL */
  headshot?: string;
}

/**
 * Player projection for fantasy/analytics.
 */
export interface PlayerProjection {
  /** Player ID */
  playerId?: string;
  /** Player name */
  playerName?: string;
  /** Position */
  position?: string;
  /** Team */
  team?: string;
  /** Week */
  week?: number;
  /** Projected points */
  projectedPoints?: number;
  /** Projected stats */
  projectedStats?: Record<string, number>;
}
