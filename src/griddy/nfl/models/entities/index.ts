/**
 * Entity model exports for NFL SDK.
 */

// Security
export { type Security, createSecurity, type SecurityMetadata, NFL_AUTH_METADATA } from './security';

// Game
export {
  type GameCategory,
  type GameStatus,
  type ExternalID,
  type BroadcastInfo,
  type TicketVendor,
  type ProTeam,
  type Venue,
  type GameExtension,
  type Game,
  type FootballGamesResponse,
} from './game';

// Player
export {
  type Player,
  type PlayerDetail,
  type PlayerSearchResult,
  type PlayerProjection,
} from './player';

// Team
export {
  type TeamVenue,
  type TeamSocialMedia,
  type Team,
  type ScheduleTeam,
  type TeamNeeds,
} from './team';

// Stats
export {
  type PassingStats,
  type RushingStats,
  type ReceivingStats,
  type DefensiveStats,
  type FantasyStats,
  type TeamDefenseStats,
  type TeamOffenseStats,
  type BoxScoreTeamStats,
  type PlayerGameStats,
} from './stats';
