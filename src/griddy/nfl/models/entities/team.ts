/**
 * Team entity models for NFL SDK.
 */

import type { ConferenceEnum } from '../enums';

/**
 * Team venue information.
 */
export interface TeamVenue {
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
  /** Capacity */
  capacity?: number;
  /** Roof type */
  roofType?: string;
  /** Surface type */
  surfaceType?: string;
}

/**
 * Team social media links.
 */
export interface TeamSocialMedia {
  /** Twitter handle */
  twitter?: string;
  /** Instagram handle */
  instagram?: string;
  /** Facebook URL */
  facebook?: string;
  /** YouTube URL */
  youtube?: string;
  /** TikTok handle */
  tiktok?: string;
}

/**
 * NFL Team entity.
 */
export interface Team {
  /** Team ID */
  id?: string;
  /** Team abbreviation */
  abbreviation?: string;
  /** Full team name */
  fullName?: string;
  /** Team nickname */
  nickName?: string;
  /** City/State/Region */
  cityStateRegion?: string;
  /** Conference (AFC/NFC) */
  conference?: ConferenceEnum;
  /** Conference abbreviation */
  conferenceAbbr?: string;
  /** Division name */
  division?: string;
  /** Division abbreviation */
  divisionAbbr?: string;
  /** Team logo URL */
  logo?: string;
  /** Team color (primary) */
  teamColor?: string;
  /** Team color (secondary) */
  teamColorSecondary?: string;
  /** Venue information */
  venue?: TeamVenue;
  /** Social media links */
  socialMedia?: TeamSocialMedia;
  /** Coach name */
  headCoach?: string;
  /** General manager */
  generalManager?: string;
  /** Owner */
  owner?: string;
  /** Year established */
  yearEstablished?: number;
}

/**
 * Pro team with game context.
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
  /** City/State/Region */
  cityStateRegion?: string;
  /** Team score */
  score?: number;
  /** Points by quarter */
  scoreByQuarter?: number[];
  /** Record (wins-losses-ties) */
  record?: string;
  /** Conference standing */
  conferenceStanding?: number;
  /** Division standing */
  divisionStanding?: number;
}

/**
 * Team information for schedules.
 */
export interface ScheduleTeam {
  /** Team ID */
  id?: string;
  /** Team abbreviation */
  abbreviation?: string;
  /** Nickname */
  nickName?: string;
  /** Record */
  record?: string;
  /** Points scored */
  score?: number | null;
}

/**
 * Team needs for draft analysis.
 */
export interface TeamNeeds {
  /** Team ID */
  teamId?: string;
  /** Team abbreviation */
  teamAbbr?: string;
  /** Position needs */
  needs?: string[];
  /** Need priority */
  priority?: Record<string, number>;
}
