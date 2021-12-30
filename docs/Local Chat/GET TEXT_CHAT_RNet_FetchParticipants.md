# GET TEXT_CHAT_RNet_FetchParticipants

Get information about the participants of a chat  


Method: `GET`  
URL: `https://127.0.0.1:{lockfile port}/chat/v5/participants/?cid={cid}`  
Headers:
 - `Authorization`: `Basic {base64 encoded "riot:{lockfile password}"}`

Variables:
 - `{lockfile password}` and `{lockfile port}`: Read [Common Components - Lockfile Data](../common-components.md#lockfile-data)
 - `{cid}`: Read [Common Components - Chat ID](../common-components.md#chat-id)
