/**
 * Games endpoint for the regular NFL API.
 */

import { BaseSDK, type EndpointConfig } from '../../../baseSdk';
import { COLLECTION_ERROR_CODES, RESOURCE_ERROR_CODES } from '../../../_constants';
import type { SDKConfiguration } from '../../../sdkConfiguration';
import type { RetryConfig, OptionalNullable, Unset } from '../../../types';
import { UNSET } from '../../../types';
import type { SeasonTypeEnum } from '../../../models/enums';
import type { FootballGamesResponse } from '../../../models/entities';
import {
  type GetFootballGamesRequest,
  GetFootballGamesRequestMeta,
  type GetFootballBoxScoreRequest,
  GetFootballBoxScoreRequestMeta,
  type GetPlayByPlayRequest,
  GetPlayByPlayRequestMeta,
  type GetLiveGameStatsRequest,
  GetLiveGameStatsRequestMeta,
  type GetWeeklyGameDetailsRequest,
  GetWeeklyGameDetailsRequestMeta,
} from '../../../models/requests';

/**
 * Box score response type.
 */
export interface BoxScoreResponse {
  /** Game ID */
  gameId?: string;
  /** Home team stats */
  homeTeam?: Record<string, unknown>;
  /** Away team stats */
  awayTeam?: Record<string, unknown>;
  /** Scoring summary */
  scoringSummary?: unknown[];
  /** Player stats */
  playerStats?: Record<string, unknown>[];
}

/**
 * Play-by-play response type.
 */
export interface PlayByPlayResponse {
  /** Game ID */
  gameId?: string;
  /** Plays */
  plays?: unknown[];
  /** Drives */
  drives?: unknown[];
}

/**
 * Game stats response type.
 */
export interface GameStatsResponse {
  /** Game summaries */
  data?: unknown[];
}

/**
 * Weekly game detail type.
 */
export interface WeeklyGameDetail {
  /** Game information */
  game?: Record<string, unknown>;
  /** Drive chart */
  driveChart?: unknown[];
  /** Replays */
  replays?: unknown[];
  /** Standings */
  standings?: Record<string, unknown>;
}

/**
 * Request options for endpoint methods.
 */
export interface RequestOptions {
  /** Retry configuration override */
  retries?: RetryConfig | Unset;
  /** Server URL override */
  serverUrl?: string;
  /** Timeout in milliseconds */
  timeoutMs?: number;
  /** Additional HTTP headers */
  httpHeaders?: Record<string, string>;
}

/**
 * Games endpoint class for regular NFL API.
 */
export class Games extends BaseSDK {
  constructor(sdkConfig: SDKConfiguration, parentRef?: object | null) {
    super(sdkConfig, parentRef);
  }

  /**
   * Create endpoint config for getGames.
   */
  private getGamesConfig(
    params: {
      season: number;
      seasonType: SeasonTypeEnum;
      week: number;
      withExternalIds?: boolean;
    },
    options?: RequestOptions
  ): EndpointConfig<FootballGamesResponse> {
    const request: GetFootballGamesRequest = {
      season: params.season,
      seasonType: params.seasonType,
      week: params.week,
      withExternalIds: params.withExternalIds ?? false,
    };

    return {
      method: 'GET',
      path: '/football/v2/games/season/{season}/seasonType/{seasonType}/week/{week}',
      operationId: 'getFootballGames',
      request,
      requestMeta: GetFootballGamesRequestMeta,
      errorStatusCodes: COLLECTION_ERROR_CODES,
      requestBodyRequired: false,
      requestHasPathParams: true,
      requestHasQueryParams: true,
      serverUrl: options?.serverUrl,
      timeoutMs: options?.timeoutMs,
      httpHeaders: options?.httpHeaders,
      retries: options?.retries ?? UNSET,
    };
  }

  /**
   * Get Games by Season, Type, and Week.
   *
   * Retrieves game information for a specific season, season type, and week
   * from the Football API.
   *
   * @param season - Season year
   * @param seasonType - Type of season
   * @param week - Week number
   * @param withExternalIds - Include external IDs in response
   * @param options - Request options
   * @returns Football games response
   */
  async getGames(
    season: number,
    seasonType: SeasonTypeEnum,
    week: number,
    withExternalIds?: boolean,
    options?: RequestOptions
  ): Promise<FootballGamesResponse> {
    const config = this.getGamesConfig(
      { season, seasonType, week, withExternalIds },
      options
    );
    return this.executeEndpoint(config);
  }

  /**
   * Create endpoint config for getBoxScore.
   */
  private getBoxScoreConfig(
    params: { gameId: string },
    options?: RequestOptions
  ): EndpointConfig<BoxScoreResponse> {
    const request: GetFootballBoxScoreRequest = {
      gameId: params.gameId,
    };

    return {
      method: 'GET',
      path: '/football/v2/games/{gameId}/boxscore',
      operationId: 'getFootballBoxScore',
      request,
      requestMeta: GetFootballBoxScoreRequestMeta,
      errorStatusCodes: RESOURCE_ERROR_CODES,
      requestBodyRequired: false,
      requestHasPathParams: true,
      requestHasQueryParams: false,
      serverUrl: options?.serverUrl,
      timeoutMs: options?.timeoutMs,
      httpHeaders: options?.httpHeaders,
      retries: options?.retries ?? UNSET,
    };
  }

  /**
   * Get Game Box Score.
   *
   * Retrieves comprehensive box score data for a specific game including
   * team statistics, individual player statistics, and scoring summary.
   *
   * @param gameId - Game identifier (UUID)
   * @param options - Request options
   * @returns Box score response
   */
  async getBoxScore(
    gameId: string,
    options?: RequestOptions
  ): Promise<BoxScoreResponse> {
    const config = this.getBoxScoreConfig({ gameId }, options);
    return this.executeEndpoint(config);
  }

  /**
   * Create endpoint config for getPlayByPlay.
   */
  private getPlayByPlayConfig(
    params: {
      gameId: string;
      includePenalties?: boolean;
      includeFormations?: boolean;
    },
    options?: RequestOptions
  ): EndpointConfig<PlayByPlayResponse> {
    const request: GetPlayByPlayRequest = {
      gameId: params.gameId,
      includePenalties: params.includePenalties ?? true,
      includeFormations: params.includeFormations ?? false,
    };

    return {
      method: 'GET',
      path: '/football/v2/games/{gameId}/playbyplay',
      operationId: 'getPlayByPlay',
      request,
      requestMeta: GetPlayByPlayRequestMeta,
      errorStatusCodes: RESOURCE_ERROR_CODES,
      requestBodyRequired: false,
      requestHasPathParams: true,
      requestHasQueryParams: true,
      serverUrl: options?.serverUrl,
      timeoutMs: options?.timeoutMs,
      httpHeaders: options?.httpHeaders,
      retries: options?.retries ?? UNSET,
    };
  }

  /**
   * Get Play-by-Play Data.
   *
   * Retrieves detailed play-by-play data for a specific game including
   * all plays, drives, scoring events, and key statistics.
   *
   * @param gameId - Game identifier (UUID)
   * @param includePenalties - Include penalty details
   * @param includeFormations - Include offensive/defensive formations
   * @param options - Request options
   * @returns Play-by-play response
   */
  async getPlayByPlay(
    gameId: string,
    includePenalties?: boolean,
    includeFormations?: boolean,
    options?: RequestOptions
  ): Promise<PlayByPlayResponse> {
    const config = this.getPlayByPlayConfig(
      { gameId, includePenalties, includeFormations },
      options
    );
    return this.executeEndpoint(config);
  }

  /**
   * Create endpoint config for getLiveGameStats.
   */
  private getLiveGameStatsConfig(
    params: {
      season: number;
      seasonType: SeasonTypeEnum;
      week: number;
    },
    options?: RequestOptions
  ): EndpointConfig<GameStatsResponse> {
    const request: GetLiveGameStatsRequest = {
      season: params.season,
      seasonType: params.seasonType,
      week: params.week,
    };

    return {
      method: 'GET',
      path: '/football/v2/stats/live/game-summaries',
      operationId: 'getLiveGameStats',
      request,
      requestMeta: GetLiveGameStatsRequestMeta,
      errorStatusCodes: COLLECTION_ERROR_CODES,
      requestBodyRequired: false,
      requestHasPathParams: false,
      requestHasQueryParams: true,
      serverUrl: options?.serverUrl,
      timeoutMs: options?.timeoutMs,
      httpHeaders: options?.httpHeaders,
      retries: options?.retries ?? UNSET,
    };
  }

  /**
   * Get Live Game Statistics.
   *
   * Retrieves live game statistics and summaries for games in progress
   * or completed games.
   *
   * @param season - Season year
   * @param seasonType - Type of season
   * @param week - Week number
   * @param options - Request options
   * @returns Game stats response
   */
  async getLiveGameStats(
    season: number,
    seasonType: SeasonTypeEnum,
    week: number,
    options?: RequestOptions
  ): Promise<GameStatsResponse> {
    const config = this.getLiveGameStatsConfig(
      { season, seasonType, week },
      options
    );
    return this.executeEndpoint(config);
  }

  /**
   * Create endpoint config for getWeeklyGameDetails.
   */
  private getWeeklyGameDetailsConfig(
    params: {
      season: number;
      type: SeasonTypeEnum;
      week: number;
      includeDriveChart?: boolean;
      includeReplays?: boolean;
      includeStandings?: boolean;
      includeTaggedVideos?: boolean;
    },
    options?: RequestOptions
  ): EndpointConfig<WeeklyGameDetail[]> {
    const request: GetWeeklyGameDetailsRequest = {
      season: params.season,
      type: params.type,
      week: params.week,
      includeDriveChart: params.includeDriveChart ?? false,
      includeReplays: params.includeReplays ?? false,
      includeStandings: params.includeStandings ?? false,
      includeTaggedVideos: params.includeTaggedVideos ?? false,
    };

    return {
      method: 'GET',
      path: '/football/v2/experience/weekly-game-details',
      operationId: 'getWeeklyGameDetails',
      request,
      requestMeta: GetWeeklyGameDetailsRequestMeta,
      errorStatusCodes: COLLECTION_ERROR_CODES,
      requestBodyRequired: false,
      requestHasPathParams: false,
      requestHasQueryParams: true,
      serverUrl: options?.serverUrl,
      timeoutMs: options?.timeoutMs,
      httpHeaders: options?.httpHeaders,
      retries: options?.retries ?? UNSET,
    };
  }

  /**
   * Get Weekly Game Details.
   *
   * Retrieves detailed game information for a specific week including
   * team standings, drive charts, replays, and tagged videos.
   *
   * @param season - Season year
   * @param type - Season type
   * @param week - Week number
   * @param includeDriveChart - Include drive chart data
   * @param includeReplays - Include replay videos
   * @param includeStandings - Include team standings
   * @param includeTaggedVideos - Include tagged video content
   * @param options - Request options
   * @returns Weekly game details
   */
  async getWeeklyGameDetails(
    season: number,
    type: SeasonTypeEnum,
    week: number,
    includeDriveChart?: boolean,
    includeReplays?: boolean,
    includeStandings?: boolean,
    includeTaggedVideos?: boolean,
    options?: RequestOptions
  ): Promise<WeeklyGameDetail[]> {
    const config = this.getWeeklyGameDetailsConfig(
      {
        season,
        type,
        week,
        includeDriveChart,
        includeReplays,
        includeStandings,
        includeTaggedVideos,
      },
      options
    );
    return this.executeEndpoint(config);
  }
}
