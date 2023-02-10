<!--

This file is automatically generated!
Do not edit it directly!
See https://github.com/techchrism/valorant-api-docs/blob/trunk/contributing.md for more information.

-->

# GET Pregame_GetPlayer

Get the ID of a game in the pre-game stage  


Method: `GET`  
URL: `https://glz-{region}-1.{region}.a.pvp.net/pregame/v1/players/{puuid}`  
Headers:
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `Authorization`: `Bearer {base64 encoded Riot token}`

Variables:
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{puuid}`: Read [Common Components - PUUID](../common-components.md#puuid)


### Response Format:
```ts
{
    /** Player UUID */
    Subject: string;
    /** Pre-Game Match ID */
    MatchID: string;
    Version: number;
}
```