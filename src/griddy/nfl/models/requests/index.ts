/**
 * Request models for NFL SDK endpoints.
 *
 * These interfaces define the parameters for API requests and include
 * metadata for parameter routing (path, query, header).
 */

import type { SeasonTypeEnum } from "../enums";

/**
 * Parameter metadata for request fields.
 */
export interface ParamMetadata {
	/** Parameter location */
	location: "path" | "query" | "header";
	/** API field name (camelCase for API) */
	apiName: string;
	/** Whether the parameter is required */
	required?: boolean;
}

/**
 * Request for getting football games.
 */
export interface GetFootballGamesRequest {
	[key: string]: unknown;
	/** Season year */
	season: number;
	/** Type of season */
	seasonType: SeasonTypeEnum;
	/** Week number */
	week: number;
	/** Include external IDs in response */
	withExternalIds?: boolean;
}

/**
 * Metadata for GetFootballGamesRequest.
 */
export const GetFootballGamesRequestMeta: Record<
	keyof GetFootballGamesRequest,
	ParamMetadata
> = {
	season: { location: "path", apiName: "season", required: true },
	seasonType: { location: "path", apiName: "seasonType", required: true },
	week: { location: "path", apiName: "week", required: true },
	withExternalIds: {
		location: "query",
		apiName: "withExternalIds",
		required: false,
	},
};

/**
 * Request for getting a box score.
 */
export interface GetFootballBoxScoreRequest {
	[key: string]: unknown;
	/** Game identifier (UUID) */
	gameId: string;
}

/**
 * Metadata for GetFootballBoxScoreRequest.
 */
export const GetFootballBoxScoreRequestMeta: Record<
	keyof GetFootballBoxScoreRequest,
	ParamMetadata
> = {
	gameId: { location: "path", apiName: "gameId", required: true },
};

/**
 * Request for getting play-by-play data.
 */
export interface GetPlayByPlayRequest {
	[key: string]: unknown;
	/** Game identifier (UUID) */
	gameId: string;
	/** Include penalty details */
	includePenalties?: boolean;
	/** Include offensive/defensive formations */
	includeFormations?: boolean;
}

/**
 * Metadata for GetPlayByPlayRequest.
 */
export const GetPlayByPlayRequestMeta: Record<
	keyof GetPlayByPlayRequest,
	ParamMetadata
> = {
	gameId: { location: "path", apiName: "gameId", required: true },
	includePenalties: {
		location: "query",
		apiName: "includePenalties",
		required: false,
	},
	includeFormations: {
		location: "query",
		apiName: "includeFormations",
		required: false,
	},
};

/**
 * Request for getting live game stats.
 */
export interface GetLiveGameStatsRequest {
	[key: string]: unknown;
	/** Season year */
	season: number;
	/** Type of season */
	seasonType: SeasonTypeEnum;
	/** Week number */
	week: number;
}

/**
 * Metadata for GetLiveGameStatsRequest.
 */
export const GetLiveGameStatsRequestMeta: Record<
	keyof GetLiveGameStatsRequest,
	ParamMetadata
> = {
	season: { location: "query", apiName: "season", required: true },
	seasonType: { location: "query", apiName: "seasonType", required: true },
	week: { location: "query", apiName: "week", required: true },
};

/**
 * Request for getting weekly game details.
 */
export interface GetWeeklyGameDetailsRequest {
	[key: string]: unknown;
	/** Season year */
	season: number;
	/** Season type */
	type: SeasonTypeEnum;
	/** Week number */
	week: number;
	/** Include drive chart data */
	includeDriveChart?: boolean;
	/** Include replay videos */
	includeReplays?: boolean;
	/** Include team standings */
	includeStandings?: boolean;
	/** Include tagged video content */
	includeTaggedVideos?: boolean;
}

/**
 * Metadata for GetWeeklyGameDetailsRequest.
 */
export const GetWeeklyGameDetailsRequestMeta: Record<
	keyof GetWeeklyGameDetailsRequest,
	ParamMetadata
> = {
	season: { location: "query", apiName: "season", required: true },
	type: { location: "query", apiName: "type", required: true },
	week: { location: "query", apiName: "week", required: true },
	includeDriveChart: {
		location: "query",
		apiName: "includeDriveChart",
		required: false,
	},
	includeReplays: {
		location: "query",
		apiName: "includeReplays",
		required: false,
	},
	includeStandings: {
		location: "query",
		apiName: "includeStandings",
		required: false,
	},
	includeTaggedVideos: {
		location: "query",
		apiName: "includeTaggedVideos",
		required: false,
	},
};

/**
 * Request for getting standings.
 */
export interface GetStandingsRequest {
	/** Season year */
	season: number;
	/** Season type */
	seasonType: SeasonTypeEnum;
	/** Week number */
	week: number;
}

/**
 * Metadata for GetStandingsRequest.
 */
export const GetStandingsRequestMeta: Record<
	keyof GetStandingsRequest,
	ParamMetadata
> = {
	season: { location: "path", apiName: "season", required: true },
	seasonType: { location: "path", apiName: "seasonType", required: true },
	week: { location: "path", apiName: "week", required: true },
};

/**
 * Request for getting rosters.
 */
export interface GetRostersRequest {
	/** Season year */
	season: number;
	/** Team ID (optional, all teams if not specified) */
	teamId?: string;
}

/**
 * Metadata for GetRostersRequest.
 */
export const GetRostersRequestMeta: Record<
	keyof GetRostersRequest,
	ParamMetadata
> = {
	season: { location: "path", apiName: "season", required: true },
	teamId: { location: "query", apiName: "teamId", required: false },
};

/**
 * Request for getting passing stats.
 */
export interface GetPassingStatsRequest {
	/** Season year */
	season: number;
	/** Season type */
	seasonType: SeasonTypeEnum;
	/** Week number (optional for season totals) */
	week?: number;
	/** Team abbreviation (optional filter) */
	teamAbbr?: string;
	/** Limit results */
	limit?: number;
	/** Offset for pagination */
	offset?: number;
}

/**
 * Metadata for GetPassingStatsRequest.
 */
export const GetPassingStatsRequestMeta: Record<
	keyof GetPassingStatsRequest,
	ParamMetadata
> = {
	season: { location: "query", apiName: "season", required: true },
	seasonType: { location: "query", apiName: "seasonType", required: true },
	week: { location: "query", apiName: "week", required: false },
	teamAbbr: { location: "query", apiName: "teamAbbr", required: false },
	limit: { location: "query", apiName: "limit", required: false },
	offset: { location: "query", apiName: "offset", required: false },
};

/**
 * Request for getting rushing stats.
 */
export interface GetRushingStatsRequest {
	/** Season year */
	season: number;
	/** Season type */
	seasonType: SeasonTypeEnum;
	/** Week number (optional for season totals) */
	week?: number;
	/** Team abbreviation (optional filter) */
	teamAbbr?: string;
	/** Limit results */
	limit?: number;
	/** Offset for pagination */
	offset?: number;
}

/**
 * Request for getting receiving stats.
 */
export interface GetReceivingStatsRequest {
	/** Season year */
	season: number;
	/** Season type */
	seasonType: SeasonTypeEnum;
	/** Week number (optional for season totals) */
	week?: number;
	/** Team abbreviation (optional filter) */
	teamAbbr?: string;
	/** Limit results */
	limit?: number;
	/** Offset for pagination */
	offset?: number;
}

/**
 * Request for getting defensive stats.
 */
export interface GetDefensiveStatsRequest {
	/** Season year */
	season: number;
	/** Season type */
	seasonType: SeasonTypeEnum;
	/** Week number (optional for season totals) */
	week?: number;
	/** Team abbreviation (optional filter) */
	teamAbbr?: string;
	/** Limit results */
	limit?: number;
	/** Offset for pagination */
	offset?: number;
}

/**
 * Request for getting player details.
 */
export interface GetPlayerRequest {
	/** Player ID */
	playerId: string;
}

/**
 * Metadata for GetPlayerRequest.
 */
export const GetPlayerRequestMeta: Record<
	keyof GetPlayerRequest,
	ParamMetadata
> = {
	playerId: { location: "path", apiName: "playerId", required: true },
};

/**
 * Request for searching players.
 */
export interface SearchPlayersRequest {
	/** Search query */
	query: string;
	/** Season year */
	season?: number;
	/** Position filter */
	position?: string;
	/** Team filter */
	team?: string;
	/** Limit results */
	limit?: number;
}
