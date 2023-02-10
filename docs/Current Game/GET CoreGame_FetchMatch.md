<!--

This file is automatically generated!
Do not edit it directly!
See https://github.com/techchrism/valorant-api-docs/blob/trunk/contributing.md for more information.

-->

# GET CoreGame_FetchMatch

Get information about an ongoing game  


Method: `GET`  
URL: `https://glz-{region}-1.{region}.a.pvp.net/core-game/v1/matches/{in-progress match id}`  
Headers:
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `Authorization`: `Bearer {base64 encoded Riot token}`

Variables:
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{in-progress match id}`: Read [Common Components - Coregame Match ID](../common-components.md#coregame-match-id)


### Response Format:
```ts
{
    /** Current Game Match ID */
    MatchID: string;
    Version: number;
    State: "IN_PROGRESS";
    /** Map ID */
    MapID: string;
    /** Game Mode */
    ModeID: string;
    ProvisioningFlow: "Matchmaking" | "CustomGame";
    GamePodID: string;
    /** Chat room ID for "all" chat */
    AllMUCName: string;
    /** Chat room ID for "team" chat */
    TeamMUCName: string;
    TeamVoiceID: string;
    IsReconnectable: boolean;
    ConnectionDetails: {
        GameServerHosts: string[];
        GameServerHost: string;
        GameServerPort: number;
        GameServerObfuscatedIP: number;
        GameClientHash: number;
        PlayerKey: string;
    };
    PostGameDetails: null;
    Players: {
        /** Player UUID */
        Subject: string;
        TeamID: ("Blue" | "Red") | string;
        /** Character ID */
        CharacterID: string;
        PlayerIdentity: {
            /** Player UUID */
            Subject: string;
            /** Card ID */
            PlayerCardID: string;
            /** Title ID */
            PlayerTitleID: string;
            AccountLevel: number;
            /** Preferred Level Border ID */
            PreferredLevelBorderID: string;
            Incognito: boolean;
            HideAccountLevel: boolean;
        };
        SeasonalBadgeInfo: {
            /** Season ID */
            SeasonID: string | "";
            NumberOfWins: number;
            WinsByTier: null;
            Rank: number;
            LeaderboardRank: number;
        };
        IsCoach: boolean;
        IsAssociated: boolean;
    }[];
    MatchmakingData: null;
}
```