/**
 * NFL SDK Enums.
 *
 * TypeScript uses union types (similar to Python's Literal) for enum-like behavior.
 * This provides better type safety and IDE support.
 */

// Season Types
/** Type of NFL season */
export type SeasonTypeEnum = 'PRE' | 'REG' | 'POST';

export const SeasonTypeEnum = {
  PRE: 'PRE' as const,
  REG: 'REG' as const,
  POST: 'POST' as const,
};

// Game Status
/** Game status */
export type GameStatusEnum =
  | 'CANCELLED'
  | 'FINAL'
  | 'IN_PROGRESS'
  | 'POSTPONED'
  | 'SCHEDULED';

export const GameStatusEnum = {
  CANCELLED: 'CANCELLED' as const,
  FINAL: 'FINAL' as const,
  IN_PROGRESS: 'IN_PROGRESS' as const,
  POSTPONED: 'POSTPONED' as const,
  SCHEDULED: 'SCHEDULED' as const,
};

// Conference
/** NFL conference */
export type ConferenceEnum = 'AFC' | 'NFC';

export const ConferenceEnum = {
  AFC: 'AFC' as const,
  NFC: 'NFC' as const,
};

// Game Phase
/** Game phase */
export type GamePhaseEnum =
  | 'PREGAME'
  | 'INGAME'
  | 'HALFTIME'
  | 'FINAL'
  | 'FINAL_OVERTIME';

export const GamePhaseEnum = {
  PREGAME: 'PREGAME' as const,
  INGAME: 'INGAME' as const,
  HALFTIME: 'HALFTIME' as const,
  FINAL: 'FINAL' as const,
  FINAL_OVERTIME: 'FINAL_OVERTIME' as const,
};

// Game Location
/** Game location type */
export type GameLocationEnum = 'HOME' | 'AWAY' | 'NEUTRAL';

export const GameLocationEnum = {
  HOME: 'HOME' as const,
  AWAY: 'AWAY' as const,
  NEUTRAL: 'NEUTRAL' as const,
};

// Game Result
/** Game result */
export type GameResultEnum = 'WIN' | 'LOSS' | 'TIE';

export const GameResultEnum = {
  WIN: 'WIN' as const,
  LOSS: 'LOSS' as const,
  TIE: 'TIE' as const,
};

// Defense Position
/** Defensive player position */
export type DefensePositionEnum =
  | 'FS'
  | 'SS'
  | 'CB'
  | 'SCB'
  | 'ILB'
  | 'OLB'
  | 'MLB'
  | 'DE'
  | 'DT'
  | 'NT';

export const DefensePositionEnum = {
  FS: 'FS' as const,
  SS: 'SS' as const,
  CB: 'CB' as const,
  SCB: 'SCB' as const,
  ILB: 'ILB' as const,
  OLB: 'OLB' as const,
  MLB: 'MLB' as const,
  DE: 'DE' as const,
  DT: 'DT' as const,
  NT: 'NT' as const,
};

// Defense Position Group
/** Defensive position group */
export type DefensePositionGroupEnum = 'DB' | 'DL' | 'LB';

export const DefensePositionGroupEnum = {
  DB: 'DB' as const,
  DL: 'DL' as const,
  LB: 'LB' as const,
};

// Offensive Player Position
/** Offensive player position */
export type OffensivePlayerPositionEnum =
  | 'QB'
  | 'RB'
  | 'FB'
  | 'WR'
  | 'TE'
  | 'C'
  | 'G'
  | 'T'
  | 'OL';

export const OffensivePlayerPositionEnum = {
  QB: 'QB' as const,
  RB: 'RB' as const,
  FB: 'FB' as const,
  WR: 'WR' as const,
  TE: 'TE' as const,
  C: 'C' as const,
  G: 'G' as const,
  T: 'T' as const,
  OL: 'OL' as const,
};

// Offensive Skill Position
/** Offensive skill position */
export type OffensiveSkillPositionEnum = 'QB' | 'RB' | 'WR' | 'TE';

export const OffensiveSkillPositionEnum = {
  QB: 'QB' as const,
  RB: 'RB' as const,
  WR: 'WR' as const,
  TE: 'TE' as const,
};

// Play Type
/** Play type */
export type PlayTypeEnum =
  | 'play_type_kickoff'
  | 'play_type_field_goal'
  | 'play_type_rush'
  | 'play_type_sack'
  | 'play_type_two_point_conversion'
  | 'play_type_xp'
  | 'play_type_pass'
  | 'play_type_punt'
  | 'play_type_unknown'
  | 'PASS'
  | 'RUSH'
  | 'PUNT'
  | 'KICKOFF'
  | 'FIELD_GOAL'
  | 'EXTRA_POINT'
  | 'PENALTY'
  | 'TIMEOUT'
  | 'TWO_MINUTE_WARNING';

export const PlayTypeEnum = {
  PLAY_TYPE_KICKOFF: 'play_type_kickoff' as const,
  PLAY_TYPE_FIELD_GOAL: 'play_type_field_goal' as const,
  PLAY_TYPE_RUSH: 'play_type_rush' as const,
  PLAY_TYPE_SACK: 'play_type_sack' as const,
  PLAY_TYPE_TWO_POINT_CONVERSION: 'play_type_two_point_conversion' as const,
  PLAY_TYPE_XP: 'play_type_xp' as const,
  PLAY_TYPE_PASS: 'play_type_pass' as const,
  PLAY_TYPE_PUNT: 'play_type_punt' as const,
  PLAY_TYPE_UNKNOWN: 'play_type_unknown' as const,
  PASS: 'PASS' as const,
  RUSH: 'RUSH' as const,
  PUNT: 'PUNT' as const,
  KICKOFF: 'KICKOFF' as const,
  FIELD_GOAL: 'FIELD_GOAL' as const,
  EXTRA_POINT: 'EXTRA_POINT' as const,
  PENALTY: 'PENALTY' as const,
  TIMEOUT: 'TIMEOUT' as const,
  TWO_MINUTE_WARNING: 'TWO_MINUTE_WARNING' as const,
};

// Down
/** Down number */
export type DownEnum = 1 | 2 | 3 | 4;

export const DownEnum = {
  FIRST: 1 as const,
  SECOND: 2 as const,
  THIRD: 3 as const,
  FOURTH: 4 as const,
};

// Quarter
/** Game quarter */
export type QuarterEnum = 1 | 2 | 3 | 4 | 5;

export const QuarterEnum = {
  FIRST: 1 as const,
  SECOND: 2 as const,
  THIRD: 3 as const,
  FOURTH: 4 as const,
  OVERTIME: 5 as const,
};

// Sort Order
/** Sort order */
export type SortOrderEnum = 'ASC' | 'DESC';

export const SortOrderEnum = {
  ASC: 'ASC' as const,
  DESC: 'DESC' as const,
};

// Team Type
/** Team type */
export type TeamTypeEnum = 'HOME' | 'AWAY';

export const TeamTypeEnum = {
  HOME: 'HOME' as const,
  AWAY: 'AWAY' as const,
};

// Site Roof Type
/** Stadium roof type */
export type SiteRoofTypeEnum = 'OPEN' | 'DOME' | 'RETRACTABLE';

export const SiteRoofTypeEnum = {
  OPEN: 'OPEN' as const,
  DOME: 'DOME' as const,
  RETRACTABLE: 'RETRACTABLE' as const,
};

// Practice Status
/** Practice status */
export type PracticeStatusEnum =
  | 'FULL'
  | 'LIMITED'
  | 'DID_NOT_PARTICIPATE'
  | 'DNP';

export const PracticeStatusEnum = {
  FULL: 'FULL' as const,
  LIMITED: 'LIMITED' as const,
  DID_NOT_PARTICIPATE: 'DID_NOT_PARTICIPATE' as const,
  DNP: 'DNP' as const,
};

// Binary Flag
/** Binary flag (0 or 1) */
export type BinaryFlagEnum = 0 | 1;

export const BinaryFlagEnum = {
  FALSE: 0 as const,
  TRUE: 1 as const,
};

// Passing Stats Category
/** Passing statistics category */
export type PassingStatsCategoryEnum =
  | 'PASSING_YARDS'
  | 'PASSING_TOUCHDOWNS'
  | 'PASSER_RATING'
  | 'COMPLETION_PERCENTAGE'
  | 'INTERCEPTIONS';

export const PassingStatsCategoryEnum = {
  PASSING_YARDS: 'PASSING_YARDS' as const,
  PASSING_TOUCHDOWNS: 'PASSING_TOUCHDOWNS' as const,
  PASSER_RATING: 'PASSER_RATING' as const,
  COMPLETION_PERCENTAGE: 'COMPLETION_PERCENTAGE' as const,
  INTERCEPTIONS: 'INTERCEPTIONS' as const,
};

// Receiving Stats Category
/** Receiving statistics category */
export type ReceivingStatsCategoryEnum =
  | 'RECEIVING_YARDS'
  | 'RECEIVING_TOUCHDOWNS'
  | 'RECEPTIONS'
  | 'TARGETS'
  | 'YARDS_PER_RECEPTION';

export const ReceivingStatsCategoryEnum = {
  RECEIVING_YARDS: 'RECEIVING_YARDS' as const,
  RECEIVING_TOUCHDOWNS: 'RECEIVING_TOUCHDOWNS' as const,
  RECEPTIONS: 'RECEPTIONS' as const,
  TARGETS: 'TARGETS' as const,
  YARDS_PER_RECEPTION: 'YARDS_PER_RECEPTION' as const,
};

// Defensive Splits
/** Defensive splits for analysis */
export type DefensiveSplitsEnum = 'PASS' | 'RUSH' | 'ALL';

export const DefensiveSplitsEnum = {
  PASS: 'PASS' as const,
  RUSH: 'RUSH' as const,
  ALL: 'ALL' as const,
};

// Week Slug (for special weeks)
/** Week slug for special weeks */
export type WeekSlugEnum =
  | 'HOF'
  | 'PRE1'
  | 'PRE2'
  | 'PRE3'
  | 'PRE4'
  | 'REG1'
  | 'REG2'
  | 'REG3'
  | 'REG4'
  | 'REG5'
  | 'REG6'
  | 'REG7'
  | 'REG8'
  | 'REG9'
  | 'REG10'
  | 'REG11'
  | 'REG12'
  | 'REG13'
  | 'REG14'
  | 'REG15'
  | 'REG16'
  | 'REG17'
  | 'REG18'
  | 'POST1'
  | 'POST2'
  | 'POST3'
  | 'POST4'
  | 'SB';

// Defense NGS Position
/** Next Gen Stats defensive position */
export type DefenseNGSPositionEnum =
  | 'S'
  | 'CB'
  | 'SCB'
  | 'LB'
  | 'DE'
  | 'DT'
  | 'ED';

export const DefenseNGSPositionEnum = {
  S: 'S' as const,
  CB: 'CB' as const,
  SCB: 'SCB' as const,
  LB: 'LB' as const,
  DE: 'DE' as const,
  DT: 'DT' as const,
  ED: 'ED' as const,
};

// Defense NGS Position Group
/** Next Gen Stats defensive position group */
export type DefenseNGSPositionGroupEnum = 'DL' | 'LB' | 'DB';

export const DefenseNGSPositionGroupEnum = {
  DL: 'DL' as const,
  LB: 'LB' as const,
  DB: 'DB' as const,
};

// Team Needs Position
/** Team needs position for draft analysis */
export type TeamNeedsPositionEnum =
  | 'CB'
  | 'DL'
  | 'Edge'
  | 'LB'
  | 'OL'
  | 'QB'
  | 'RB'
  | 'S'
  | 'TE'
  | 'WR';

export const TeamNeedsPositionEnum = {
  CB: 'CB' as const,
  DL: 'DL' as const,
  EDGE: 'Edge' as const,
  LB: 'LB' as const,
  OL: 'OL' as const,
  QB: 'QB' as const,
  RB: 'RB' as const,
  S: 'S' as const,
  TE: 'TE' as const,
  WR: 'WR' as const,
};

// Meridiem (AM/PM)
/** Time meridiem */
export type MeridiemEnum = 'AM' | 'PM';

export const MeridiemEnum = {
  AM: 'AM' as const,
  PM: 'PM' as const,
};

// Yards to Go
/** Yards to go categories */
export type YardsToGoEnum = 'SHORT' | 'MEDIUM' | 'LONG';

export const YardsToGoEnum = {
  SHORT: 'SHORT' as const,
  MEDIUM: 'MEDIUM' as const,
  LONG: 'LONG' as const,
};
