[**griddy-sdk**](README.md)

***

# griddy-sdk

Griddy SDK - TypeScript SDK for accessing NFL data.

## Example

```typescript
import { GriddyNFL } from 'griddy-sdk';

const nfl = new GriddyNFL({
  nflAuth: { accessToken: 'your_access_token' }
});

// Get games
const games = await nfl.games.getGames(2024, 'REG', 1);

// Get box score
const boxScore = await nfl.games.getBoxScore('game-id');
```

## Classes

- [BaseSDK](classes/BaseSDK.md)
- [Games](classes/Games.md)
- [GriddyNFL](classes/GriddyNFL.md)
- [GriddyNFLDefaultError](classes/GriddyNFLDefaultError.md)
- [GriddyNFLError](classes/GriddyNFLError.md)
- [NoResponseError](classes/NoResponseError.md)
- [ResponseValidationError](classes/ResponseValidationError.md)
- [SDKConfiguration](classes/SDKConfiguration.md)
- [SDKHooks](classes/SDKHooks.md)

## Interfaces

- [AfterErrorContext](interfaces/AfterErrorContext.md)
- [AfterErrorHook](interfaces/AfterErrorHook.md)
- [AfterSuccessContext](interfaces/AfterSuccessContext.md)
- [AfterSuccessHook](interfaces/AfterSuccessHook.md)
- [AsyncHttpClient](interfaces/AsyncHttpClient.md)
- [AuthInfo](interfaces/AuthInfo.md)
- [BeforeRequestContext](interfaces/BeforeRequestContext.md)
- [BeforeRequestHook](interfaces/BeforeRequestHook.md)
- [BoxScoreTeamStats](interfaces/BoxScoreTeamStats.md)
- [BroadcastInfo](interfaces/BroadcastInfo.md)
- [DefensiveStats](interfaces/DefensiveStats.md)
- [EndpointConfig](interfaces/EndpointConfig.md)
- [ExternalID](interfaces/ExternalID.md)
- [FantasyStats](interfaces/FantasyStats.md)
- [FootballGamesResponse](interfaces/FootballGamesResponse.md)
- [Game](interfaces/Game.md)
- [GameExtension](interfaces/GameExtension.md)
- [GetDefensiveStatsRequest](interfaces/GetDefensiveStatsRequest.md)
- [GetFootballBoxScoreRequest](interfaces/GetFootballBoxScoreRequest.md)
- [GetFootballGamesRequest](interfaces/GetFootballGamesRequest.md)
- [GetLiveGameStatsRequest](interfaces/GetLiveGameStatsRequest.md)
- [GetPassingStatsRequest](interfaces/GetPassingStatsRequest.md)
- [GetPlayByPlayRequest](interfaces/GetPlayByPlayRequest.md)
- [GetPlayerRequest](interfaces/GetPlayerRequest.md)
- [GetReceivingStatsRequest](interfaces/GetReceivingStatsRequest.md)
- [GetRostersRequest](interfaces/GetRostersRequest.md)
- [GetRushingStatsRequest](interfaces/GetRushingStatsRequest.md)
- [GetStandingsRequest](interfaces/GetStandingsRequest.md)
- [GetWeeklyGameDetailsRequest](interfaces/GetWeeklyGameDetailsRequest.md)
- [GriddyNFLOptions](interfaces/GriddyNFLOptions.md)
- [HookContext](interfaces/HookContext.md)
- [Hooks](interfaces/Hooks.md)
- [HttpClient](interfaces/HttpClient.md)
- [Logger](interfaces/Logger.md)
- [NFLSettings](interfaces/NFLSettings.md)
- [ParamMetadata](interfaces/ParamMetadata.md)
- [PassingStats](interfaces/PassingStats.md)
- [Player](interfaces/Player.md)
- [PlayerDetail](interfaces/PlayerDetail.md)
- [PlayerGameStats](interfaces/PlayerGameStats.md)
- [PlayerProjection](interfaces/PlayerProjection.md)
- [PlayerSearchResult](interfaces/PlayerSearchResult.md)
- [ProTeam](interfaces/ProTeam.md)
- [ReceivingStats](interfaces/ReceivingStats.md)
- [RequestOptions](interfaces/RequestOptions.md)
- [RetryConfig](interfaces/RetryConfig.md)
- [RushingStats](interfaces/RushingStats.md)
- [ScheduleTeam](interfaces/ScheduleTeam.md)
- [SDKConfigurationOptions](interfaces/SDKConfigurationOptions.md)
- [SDKInitHook](interfaces/SDKInitHook.md)
- [SearchPlayersRequest](interfaces/SearchPlayersRequest.md)
- [Security](interfaces/Security.md)
- [SecurityMetadata](interfaces/SecurityMetadata.md)
- [Team](interfaces/Team.md)
- [TeamDefenseStats](interfaces/TeamDefenseStats.md)
- [TeamNeeds](interfaces/TeamNeeds.md)
- [TeamOffenseStats](interfaces/TeamOffenseStats.md)
- [TeamSocialMedia](interfaces/TeamSocialMedia.md)
- [TeamVenue](interfaces/TeamVenue.md)
- [TicketVendor](interfaces/TicketVendor.md)
- [Venue](interfaces/Venue.md)

## Type Aliases

- [BinaryFlagEnum](type-aliases/BinaryFlagEnum.md)
- [ConferenceEnum](type-aliases/ConferenceEnum.md)
- [DefenseNGSPositionEnum](type-aliases/DefenseNGSPositionEnum.md)
- [DefenseNGSPositionGroupEnum](type-aliases/DefenseNGSPositionGroupEnum.md)
- [DefensePositionEnum](type-aliases/DefensePositionEnum.md)
- [DefensePositionGroupEnum](type-aliases/DefensePositionGroupEnum.md)
- [DefensiveSplitsEnum](type-aliases/DefensiveSplitsEnum.md)
- [DownEnum](type-aliases/DownEnum.md)
- [GameCategory](type-aliases/GameCategory.md)
- [GameLocationEnum](type-aliases/GameLocationEnum.md)
- [GamePhaseEnum](type-aliases/GamePhaseEnum.md)
- [GameResultEnum](type-aliases/GameResultEnum.md)
- [GameStatus](type-aliases/GameStatus.md)
- [GameStatusEnum](type-aliases/GameStatusEnum.md)
- [HttpMethod](type-aliases/HttpMethod.md)
- [MeridiemEnum](type-aliases/MeridiemEnum.md)
- [Nullable](type-aliases/Nullable.md)
- [OffensivePlayerPositionEnum](type-aliases/OffensivePlayerPositionEnum.md)
- [OffensiveSkillPositionEnum](type-aliases/OffensiveSkillPositionEnum.md)
- [OptionalNullable](type-aliases/OptionalNullable.md)
- [PassingStatsCategoryEnum](type-aliases/PassingStatsCategoryEnum.md)
- [PlayTypeEnum](type-aliases/PlayTypeEnum.md)
- [PracticeStatusEnum](type-aliases/PracticeStatusEnum.md)
- [QuarterEnum](type-aliases/QuarterEnum.md)
- [ReceivingStatsCategoryEnum](type-aliases/ReceivingStatsCategoryEnum.md)
- [SeasonTypeEnum](type-aliases/SeasonTypeEnum.md)
- [ServerType](type-aliases/ServerType.md)
- [SiteRoofTypeEnum](type-aliases/SiteRoofTypeEnum.md)
- [SortOrderEnum](type-aliases/SortOrderEnum.md)
- [TeamNeedsPositionEnum](type-aliases/TeamNeedsPositionEnum.md)
- [TeamTypeEnum](type-aliases/TeamTypeEnum.md)
- [Unset](type-aliases/Unset.md)
- [WeekSlugEnum](type-aliases/WeekSlugEnum.md)
- [YardsToGoEnum](type-aliases/YardsToGoEnum.md)

## Variables

- [BinaryFlagEnum](variables/BinaryFlagEnum.md)
- [COLLECTION\_ERROR\_CODES](variables/COLLECTION_ERROR_CODES.md)
- [ConferenceEnum](variables/ConferenceEnum.md)
- [DEFAULT\_RETRY\_CONFIG](variables/DEFAULT_RETRY_CONFIG.md)
- [DefenseNGSPositionEnum](variables/DefenseNGSPositionEnum.md)
- [DefenseNGSPositionGroupEnum](variables/DefenseNGSPositionGroupEnum.md)
- [DefensePositionEnum](variables/DefensePositionEnum.md)
- [DefensePositionGroupEnum](variables/DefensePositionGroupEnum.md)
- [DefensiveSplitsEnum](variables/DefensiveSplitsEnum.md)
- [DownEnum](variables/DownEnum.md)
- [GameLocationEnum](variables/GameLocationEnum.md)
- [GamePhaseEnum](variables/GamePhaseEnum.md)
- [GameResultEnum](variables/GameResultEnum.md)
- [GameStatusEnum](variables/GameStatusEnum.md)
- [GetFootballBoxScoreRequestMeta](variables/GetFootballBoxScoreRequestMeta.md)
- [GetFootballGamesRequestMeta](variables/GetFootballGamesRequestMeta.md)
- [GetLiveGameStatsRequestMeta](variables/GetLiveGameStatsRequestMeta.md)
- [GetPassingStatsRequestMeta](variables/GetPassingStatsRequestMeta.md)
- [GetPlayByPlayRequestMeta](variables/GetPlayByPlayRequestMeta.md)
- [GetPlayerRequestMeta](variables/GetPlayerRequestMeta.md)
- [GetRostersRequestMeta](variables/GetRostersRequestMeta.md)
- [GetStandingsRequestMeta](variables/GetStandingsRequestMeta.md)
- [GetWeeklyGameDetailsRequestMeta](variables/GetWeeklyGameDetailsRequestMeta.md)
- [MeridiemEnum](variables/MeridiemEnum.md)
- [NFL](variables/NFL.md)
- [NFL\_AUTH\_METADATA](variables/NFL_AUTH_METADATA.md)
- [OffensivePlayerPositionEnum](variables/OffensivePlayerPositionEnum.md)
- [OffensiveSkillPositionEnum](variables/OffensiveSkillPositionEnum.md)
- [PassingStatsCategoryEnum](variables/PassingStatsCategoryEnum.md)
- [PlayTypeEnum](variables/PlayTypeEnum.md)
- [PracticeStatusEnum](variables/PracticeStatusEnum.md)
- [QuarterEnum](variables/QuarterEnum.md)
- [ReceivingStatsCategoryEnum](variables/ReceivingStatsCategoryEnum.md)
- [RESOURCE\_ERROR\_CODES](variables/RESOURCE_ERROR_CODES.md)
- [RETRY\_STATUS\_CODES](variables/RETRY_STATUS_CODES.md)
- [SeasonTypeEnum](variables/SeasonTypeEnum.md)
- [SECURED\_RESOURCE\_ERROR\_CODES](variables/SECURED_RESOURCE_ERROR_CODES.md)
- [SERVERS](variables/SERVERS.md)
- [SiteRoofTypeEnum](variables/SiteRoofTypeEnum.md)
- [SortOrderEnum](variables/SortOrderEnum.md)
- [STATS\_ERROR\_CODES](variables/STATS_ERROR_CODES.md)
- [TeamNeedsPositionEnum](variables/TeamNeedsPositionEnum.md)
- [TeamTypeEnum](variables/TeamTypeEnum.md)
- [UNSET](variables/UNSET.md)
- [USER\_AGENT](variables/USER_AGENT.md)
- [VERSION](variables/VERSION.md)
- [YardsToGoEnum](variables/YardsToGoEnum.md)

## Functions

- [createNFLSettings](functions/createNFLSettings.md)
- [createRetryConfig](functions/createRetryConfig.md)
- [createSDKHooks](functions/createSDKHooks.md)
- [createSecurity](functions/createSecurity.md)
- [isUnset](functions/isUnset.md)
- [matchResponse](functions/matchResponse.md)
- [matchStatusCodes](functions/matchStatusCodes.md)

## References

### NFLAuth

Renames and re-exports [AuthInfo](interfaces/AuthInfo.md)
