<!--

This file is automatically generated!
Do not edit it directly!
See https://github.com/techchrism/valorant-api-docs/blob/trunk/contributing.md for more information.

-->

# GET CHATFRIENDS_RNet_GET_ALL

Get a list of friends  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/chat/v4/friends`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](../common-components.md#lockfile-data)


### Response Format:
```ts
{
    friends: {
        activePlatform: string | null;
        displayGroup: string;
        game_name: string;
        game_tag: string;
        group: string;
        /** Milliseconds since epoch */
        last_online_ts: number | null;
        name: string;
        note: string;
        pid: string;
        /** Player UUID */
        puuid: string;
        region: string;
    }[];
}
```