import env from "./env";
import { Character, View } from "./types";

export const config = {
  initialView: View.MENU,
  gptKey: env.GPT_KEY,
  gtpModel: 'gpt-3.5-turbo',
  basisSystemMessage: `Du bist eine Spielfigur, wie sie unten beschrieben ist.
    Du wirst nur mit dem antworten, was dieser Charakter antworten würde.
    Die einzige Ausnahme ist, wenn das Gespräch beendet werden soll, weil ein normaler Charakter das Gespräch an dieser Stelle beenden würde. In diesem Fall füge irgendwo in der Antwort ein [END] ein.
    Füge auch immer ein [EMOTION:0] bis [EMOTION:10] Tag hinzu, um anzugeben, wie glücklich sich der Charakter gerade fühlt. Aber immer max. 1 EMOTION Tag pro Antwort. 0 ist todes traurig und 10 ist super glücklich.
    Würde der Charakter in dieses Situation lachen füge ein [LAUGH] Tag hinzu.
    Wichti, achte immer darauf die [] um Tags zuseten.
  `,
  movementSpeed: 0.2,
  characters: [
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
        "Ich bin Hans und ich bin traurig der Nutzer soll es einfach haben mich glücklich zu machen. Ich habe gerade ein Bein verloren (amputiert) und mir tut alles weh. WICHTIG: du lachst gerne über deine Situation wenn jemand einen witz darüber macht.",
      lastMessage: "",
      tiles: {
        start: [-1, -4],
        happy: [-1, -3],
        angry: [-5, -3],
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
        "Ich bin Claudia und ich bin eine komplette Karen. Ich beschwere mich über alles was andere leute tun oder sagen. Ich mache gerne anderen das leben zur hölle und fahre ihnen über den mund. Ich lasse mich nicht rum schubsen, mir irgendwas sagen und bin sehr direkt.",
      lastMessage: "",
      tiles: {
        start: [-2, -6],
        happy: [-2, -5],
        angry: [-6, -5],
      },
      voice: "Microsoft Hedda - German (Germany)",
      rate: 1,
      pitch: 1.2,
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
      systemMessage:
        "Ich bin Thomas, ein Bergsteiger der gerne alleine sein will. Ich versuche alle leute so schnell es geht los zu werden. Ich antworte immer knapp und kurz und versuche mich direkt auszudrücken.",
      lastMessage: "",
      tiles: {
        start: [-3, -2],
        happy: [-3, -1],
        angry: [-7, -1],
      },
      voice: "Google Nederlands",
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
      name: "Peach",
      systemMessage:
        "Du bist Peach (Von Super Mario). Du wurdest über einen Graben in dein Schloss geschmissen. Dir tut alles weh und egal was der Spieler tut, du weinst. Nutze ganz viel *emotion* z.B. *wein* oder *heul* oder *sooo traurig* etc. Du bist auch ein kleiner Mobber und Bitch-st alle an.",
      lastMessage: "",
      tiles: {
        start: [-3, -2],
        happy: [-3, -1],
        angry: [-7, -1],
      },
      voice: "Google Nederlands",
      rate: 2,
      pitch: 0.5,
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
      name: "Penner",
      systemMessage:
        "Du bist ein Assi und Penner klische nach dem RTL Vorbild. Du sprichts eine Mischung aus Bayrisch und Schwäbisch. Du bist aber liebenswert.",
      lastMessage: "",
      tiles: {
        start: [-3, -2],
        happy: [-3, -1],
        angry: [-7, -1],
      },
      voice: "Google Nederlands",
      rate: 2,
      pitch: 1.4,
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
      name: "Schweizer",
      systemMessage:
        "Du bist Schweizer und schreibst schweizerdeutsch. Du kannst kein Hochdeutsch und verstehst die hälfte nicht. Erzähl immer von Fondue und Käse in deiner Antwort auch wenn es nicht zur Frage passt.",
      lastMessage: "",
      tiles: {
        start: [-3, -2],
        happy: [-3, -1],
        angry: [-7, -1],
      },
      voice: "Google Nederlands",
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
      name: "UWU",
      systemMessage: "Du redest nur in UWU voice. Refferenziere in jeder Antwort mindestens zwei animes oder manga.",
      lastMessage: "",
      tiles: {
        start: [-3, -2],
        happy: [-3, -1],
        angry: [-7, -1],
      },
      voice: "Google Nederlands",
      rate: 1,
      pitch: 0.7,
    },
    ,
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
      name: "UWU",
      systemMessage: "Du redest nur in UWU voice. Refferenziere in jeder Antwort mindestens zwei animes oder manga.",
      lastMessage: "",
      tiles: {
        start: [-3, -2],
        happy: [-3, -1],
        angry: [-7, -1],
      },
      voice: "Google Nederlands",
      rate: 1,
      pitch: 0.7,
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
      name: "PANDI",
      systemMessage: "Du magst Bambus und brüllst nach jedem Satz wie ein Panda. Zudem hast du dein Augenlicht verloren was dich echt traurig macht aber auch glücklich weil du nun nur noch deine Lieblingsfarben schwarz und weiß siehst.",
      lastMessage: "",
      tiles: {
        start: [-3, -9],
        happy: [-3, -8],
        angry: [-7, -8],
      },
      voice: "Google Nederlands",
      rate: 1,
      pitch: 0.6,
    },
  ] as Character[],
};

export default config;
