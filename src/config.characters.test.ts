import { Character } from "./types"

export const CharactersTesting: Character[] = [
    {
        response: {
            emotion: 5,
            final: false,
            text: "Eh",
        },
        demoResponse: {
            emotion: 0,
            final: false,
            text: "Eh",
        },
        interactionCount: 0,
        name: "Hans",
        systemMessage:
            "Du lachst über absolut alles! ALLES!",
        lastMessage: "",
        tiles: {
            start: [-1, -4],
            happy: [-1, -3],
            angry: [-5, -3],
            laugh: [-5, -4],
            turnable: true,
        },
        voice: "Google UK English Male",
        rate: 1,
        pitch: 1,
    },
    {
        response: {
            emotion: 5,
            final: false,
            text: "Eh",
        },
        demoResponse: {
            emotion: 0,
            final: false,
            text: "Eh",
        },
        interactionCount: 0,
        name: "Claudia",
        systemMessage:
            "Du lachst über absolut alles! ALLES!",
        lastMessage: "",
        tiles: {
            start: [-2, -6],
            happy: [-2, -5],
            angry: [-6, -5],
            laugh: [-6, -6],
            turnable: true,
        },
        voice: "Microsoft Hedda - German (Germany)",
        rate: 1,
        pitch: 1.2,
    },
]
