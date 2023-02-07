import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {playerUUIDSchema, pregameIDSchema} from '../../commonTypes'

export const pregamePlayerEndpoint = {
    name: 'Pregame Player',
    description: 'Get the pregame match ID for the provided player',
    queryName: 'Pregame_GetPlayer',
    category: 'Pre-Game Endpoints',
    type: 'glz',
    suffix: 'pregame/v1/players/{puuid}',
    riotRequirements: {
        token: true,
        entitlement: true
    },
    responses: {
        '200': z.object({
            Subject: playerUUIDSchema,
            MatchID: pregameIDSchema,
            Version: z.number()
        })
    }
} satisfies ValorantEndpoint

export type PregamePlayerResponse = z.input<typeof pregamePlayerEndpoint.responses['200']>