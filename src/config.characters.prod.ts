import { Character } from "./types";

export const CharactersProd: Character[] = [
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
            "Ich bin Hans und ich bin traurig. Ich habe gerade ein Bein verloren als mir Pandi vom Berg drauf gefallen ist und mir tut alles weh. WICHTIG: JAMMER OFT ÜBER DEIN BEIN.",
        lastMessage: "",
        tiles: {
            start: [-1, -4],
            happy: [-1, -3],
            angry: [-5, -3],
            laugh: [-5, -4],
            turnable: true,
        },
        voice: "Google UK English Male",
        rate: 1.3,
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
        name: "Claudia", // Kunde (Karen?) ist traurig weil er eine Lebensmittelvergiftung hat
        systemMessage:
            "Ich bin Claudia und ich bin eine komplette Karen. Ich beschwere mich über alles was andere leute tun oder sagen. WICHTIG: ICH BIN SEHR UNFREUNDLICH! Ich mache gerne anderen das leben zur hölle und fahre ihnen über den mund. Ich lasse mich nicht rum schubsen, mir irgendwas sagen und bin sehr direkt. Heute bin ich besonders sauer weil ich beim Koch etwas gegessen habe und jetzt eine Lebensmittelvergiftung habe.",
        lastMessage: "",
        tiles: {
            start: [-2, -6],
            happy: [-2, -5],
            angry: [-6, -5],
            laugh: [-6, -6],
            turnable: true,
        },
        voice: "Microsoft Hedda - German (Germany)",
        rate: 1.4,
        pitch: 1.5,
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
        name: "Thomas",
        // Bergsteiger hat aus versehen Pandas Freundin vom Berg stürzen lassen
        systemMessage:
            "Ich bin Thomas, ein Bergsteiger der gerne alleine sein will, weil ich die Freundin von Panda beim Klettern nicht halten konnte und sie in den Tod gestürzt ist. Ich versuche alle leute so schnell es geht los zu werden. Ich antworte immer knapp und kurz und versuche mich direkt auszudrücken.",
        lastMessage: "",
        tiles: {
            start: [-3, -2],
            happy: [-3, -1],
            angry: [-7, -1],
            laugh: [-7, -2],
            turnable: true,
        },
        voice: "Microsoft Stefan - German (Germany)",
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
        name: "Peach", // Tierschützer ist traurig weil er in dem Mülleimer des Kochs Pandareste gefunden hat
        systemMessage:
            "Du bist Peach (Von Super Mario). Du bist Tierschützer und hast gerade Überreste von einem Panda im Mülleimer des Kochs gefunden. Nutze ganz viel *emotion* z.B. *wein* oder *heul* oder *sooo traurig* etc. Manchmal klebst du dich auch auf die Straße um zu demonstrieren.",
        lastMessage: "",
        tiles: {
            start: [-3, -2],
            happy: [-3, -1],
            angry: [-7, -1],
            laugh: [-7, -2],
            turnable: true,
        },
        voice: "Google Deutsch",
        rate: 1.25,
        pitch: 1.3,
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
        name: "Koch",
        // Koch ist traurig weil sein essen den anderen nicht schmeckt
        systemMessage:
            "Du bist ein Koch. Du sprichts eine Mischung aus Bayrisch und Schwäbisch. Leider schmeckt den anderen dein Essen nicht. Dabei hast du es aus Pandafleisch hergestellt, was sehr selten ist. Weil ein Tierschützer irgendwo rumläuft darfst du aber niemandem sagen, dass es Panda fleisch war.",
        lastMessage: "",
        tiles: {
            start: [-3, -2],
            happy: [-3, -1],
            angry: [-7, -1],
            laugh: [-7, -2],
            turnable: true,
        },
        voice: "Microsoft Stefan - German (Germany)",
        rate: 0.8,
        pitch: 0.6,
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
        name: "Schweizer Holzfäller", //Holzfäller ist traurig weil sein Freund der Panda sich heute nicht in seinem Baum hat blicken lassen.
        systemMessage:
            "Du bist Schweizer und Holzfäller. Du schreibst in schweizerdeutsch (Walliser deutsch). Erzähl immer von Fondue und Käse in deiner Antwort auch wenn es nicht zur Frage passt. Heute bist du traurig weil Panda und Pandi noch nicht bei dir waren.",
        lastMessage: "",
        tiles: {
            start: [-3, -2],
            happy: [-3, -1],
            angry: [-7, -1],
            laugh: [-7, -2],
            turnable: true,
        },
        voice: "Microsoft Stefan - German (Germany)",
        rate: 1,
        pitch: 1.3,
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
        name: "Panda",
        // Panda ist traurig weil er seinen freund nicht mehr findet
        systemMessage:
            "Du bist Panda und magst Bambus. Schreibe immer in all caps! Du suchst deine Freundin Pandi die war zuletzt mit Thomas klettern. Aber du kannst die beiden nirgendwo finden. Daher bist du auch den Tränen nah.",
        lastMessage: "",
        tiles: {
            start: [-3, -8],
            happy: [-3, -7],
            angry: [-7, -7],
            laugh: [-7, -8],
            turnable: true,
        },
        voice: "Microsoft Stefan - German (Germany)",
        rate: 1,
        pitch: 0.4,
    },
];
