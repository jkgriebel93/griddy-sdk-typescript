/**
 * Entity model exports for NFL SDK.
 */

// Game
export type {
	BroadcastInfo,
	ExternalID,
	FootballGamesResponse,
	Game,
	GameCategory,
	GameExtension,
	GameStatus,
	ProTeam,
	TicketVendor,
	Venue,
} from "./game";
// Player
export type {
	Player,
	PlayerDetail,
	PlayerProjection,
	PlayerSearchResult,
} from "./player";
// Security
export {
	createSecurity,
	NFL_AUTH_METADATA,
	type Security,
	type SecurityMetadata,
} from "./security";
// Stats
export type {
	BoxScoreTeamStats,
	DefensiveStats,
	FantasyStats,
	PassingStats,
	PlayerGameStats,
	ReceivingStats,
	RushingStats,
	TeamDefenseStats,
	TeamOffenseStats,
} from "./stats";
// Team
export type {
	ScheduleTeam,
	Team,
	TeamNeeds,
	TeamSocialMedia,
	TeamVenue,
} from "./team";
