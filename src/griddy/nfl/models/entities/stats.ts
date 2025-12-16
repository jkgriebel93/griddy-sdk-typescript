/**
 * Statistics entity models for NFL SDK.
 */

/**
 * Passing statistics.
 */
export interface PassingStats {
  /** Player ID */
  playerId?: string;
  /** Player name */
  playerName?: string;
  /** Team abbreviation */
  teamAbbr?: string;
  /** Pass attempts */
  attempts?: number;
  /** Completions */
  completions?: number;
  /** Completion percentage */
  completionPercentage?: number;
  /** Passing yards */
  yards?: number;
  /** Yards per attempt */
  yardsPerAttempt?: number;
  /** Passing touchdowns */
  touchdowns?: number;
  /** Interceptions */
  interceptions?: number;
  /** Passer rating */
  passerRating?: number;
  /** Sacks taken */
  sacks?: number;
  /** Sack yards lost */
  sackYards?: number;
  /** Longest pass */
  longest?: number;
  /** First downs */
  firstDowns?: number;
  /** Air yards */
  airYards?: number;
}

/**
 * Rushing statistics.
 */
export interface RushingStats {
  /** Player ID */
  playerId?: string;
  /** Player name */
  playerName?: string;
  /** Team abbreviation */
  teamAbbr?: string;
  /** Rush attempts */
  attempts?: number;
  /** Rushing yards */
  yards?: number;
  /** Yards per carry */
  yardsPerCarry?: number;
  /** Rushing touchdowns */
  touchdowns?: number;
  /** Longest run */
  longest?: number;
  /** First downs */
  firstDowns?: number;
  /** Fumbles */
  fumbles?: number;
  /** Fumbles lost */
  fumblesLost?: number;
}

/**
 * Receiving statistics.
 */
export interface ReceivingStats {
  /** Player ID */
  playerId?: string;
  /** Player name */
  playerName?: string;
  /** Team abbreviation */
  teamAbbr?: string;
  /** Targets */
  targets?: number;
  /** Receptions */
  receptions?: number;
  /** Catch percentage */
  catchPercentage?: number;
  /** Receiving yards */
  yards?: number;
  /** Yards per reception */
  yardsPerReception?: number;
  /** Yards after catch */
  yardsAfterCatch?: number;
  /** Receiving touchdowns */
  touchdowns?: number;
  /** Longest reception */
  longest?: number;
  /** First downs */
  firstDowns?: number;
}

/**
 * Defensive statistics.
 */
export interface DefensiveStats {
  /** Player ID */
  playerId?: string;
  /** Player name */
  playerName?: string;
  /** Team abbreviation */
  teamAbbr?: string;
  /** Total tackles */
  tackles?: number;
  /** Solo tackles */
  soloTackles?: number;
  /** Assisted tackles */
  assistedTackles?: number;
  /** Tackles for loss */
  tacklesForLoss?: number;
  /** Sacks */
  sacks?: number;
  /** Quarterback hits */
  qbHits?: number;
  /** Interceptions */
  interceptions?: number;
  /** Interception return yards */
  intReturnYards?: number;
  /** Passes defended */
  passesDefended?: number;
  /** Forced fumbles */
  forcedFumbles?: number;
  /** Fumble recoveries */
  fumbleRecoveries?: number;
  /** Defensive touchdowns */
  touchdowns?: number;
  /** Safeties */
  safeties?: number;
}

/**
 * Fantasy statistics.
 */
export interface FantasyStats {
  /** Player ID */
  playerId?: string;
  /** Player name */
  playerName?: string;
  /** Position */
  position?: string;
  /** Team abbreviation */
  teamAbbr?: string;
  /** Fantasy points (standard) */
  fantasyPoints?: number;
  /** Fantasy points (PPR) */
  fantasyPointsPpr?: number;
  /** Fantasy points (half PPR) */
  fantasyPointsHalfPpr?: number;
  /** Position rank */
  positionRank?: number;
  /** Overall rank */
  overallRank?: number;
}

/**
 * Team defense statistics.
 */
export interface TeamDefenseStats {
  /** Team ID */
  teamId?: string;
  /** Team abbreviation */
  teamAbbr?: string;
  /** Points allowed */
  pointsAllowed?: number;
  /** Total yards allowed */
  yardsAllowed?: number;
  /** Passing yards allowed */
  passingYardsAllowed?: number;
  /** Rushing yards allowed */
  rushingYardsAllowed?: number;
  /** Sacks */
  sacks?: number;
  /** Interceptions */
  interceptions?: number;
  /** Fumble recoveries */
  fumbleRecoveries?: number;
  /** Defensive touchdowns */
  defensiveTouchdowns?: number;
  /** Safeties */
  safeties?: number;
}

/**
 * Team offense statistics.
 */
export interface TeamOffenseStats {
  /** Team ID */
  teamId?: string;
  /** Team abbreviation */
  teamAbbr?: string;
  /** Total points */
  points?: number;
  /** Total yards */
  totalYards?: number;
  /** Passing yards */
  passingYards?: number;
  /** Rushing yards */
  rushingYards?: number;
  /** First downs */
  firstDowns?: number;
  /** Third down conversions */
  thirdDownConversions?: number;
  /** Third down attempts */
  thirdDownAttempts?: number;
  /** Red zone touchdowns */
  redZoneTouchdowns?: number;
  /** Red zone attempts */
  redZoneAttempts?: number;
  /** Turnovers */
  turnovers?: number;
}

/**
 * Box score team statistics.
 */
export interface BoxScoreTeamStats {
  /** Team ID */
  teamId?: string;
  /** Team abbreviation */
  teamAbbr?: string;
  /** First downs */
  firstDowns?: number;
  /** Total plays */
  totalPlays?: number;
  /** Total yards */
  totalYards?: number;
  /** Passing completions */
  passingCompletions?: number;
  /** Passing attempts */
  passingAttempts?: number;
  /** Passing yards */
  passingYards?: number;
  /** Rushing attempts */
  rushingAttempts?: number;
  /** Rushing yards */
  rushingYards?: number;
  /** Penalties */
  penalties?: number;
  /** Penalty yards */
  penaltyYards?: number;
  /** Turnovers */
  turnovers?: number;
  /** Time of possession */
  timeOfPossession?: string;
}

/**
 * Player game statistics.
 */
export interface PlayerGameStats {
  /** Player ID */
  playerId?: string;
  /** Player name */
  playerName?: string;
  /** Game ID */
  gameId?: string;
  /** Team abbreviation */
  teamAbbr?: string;
  /** Passing stats */
  passing?: PassingStats;
  /** Rushing stats */
  rushing?: RushingStats;
  /** Receiving stats */
  receiving?: ReceivingStats;
  /** Defensive stats */
  defense?: DefensiveStats;
  /** Fantasy points */
  fantasyPoints?: number;
}
