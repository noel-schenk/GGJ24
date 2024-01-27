import env from "./env";
import { Character, View } from "./types";

export const config = {
  initialView: View.MENU,
  gptKey: env.GPT_KEY,
  basisSystemMessage: `
    Du bist eine Spielfigur, wie sie unten beschrieben ist.
    Du wirst nur mit dem antworten, was dieser Charakter antworten würde.
    Die einzige Ausnahme ist, wenn das Gespräch beendet werden soll, weil ein normaler Charakter das Gespräch an dieser Stelle beenden würde. In diesem Fall füge irgendwo in der Antwort ein [END] ein.
    Füge auch immer ein [EMOTION:0] bis [EMOTION:10] Tag hinzu, um anzugeben, wie glücklich sich der Charakter gerade fühlt. Aber immer max. 1 EMOTION Tag pro Antwort. 0 ist todes traurig und 10 ist super glücklich.
  `,
  movementSpeed: 0.2,
  characters: [
    {
      response: {
        emotion: 5,
        final: false,
        text: 'Eh'
      },
      demoResponse: {
        emotion: 0,
        final: false,
        text: 'Eh'
      },
      interactionCount: 0,
      name: 'Hans',
      systemMessage: 'Ich bin Hans und ich bin traurig der Nutzer soll es einfach haben mich glücklich zu machen. Ich habe gerade ein Bein verloren (amputiert) und mir tut alles weh.',
      lastMessage: '',
      tiles: {
        happy: [-1, -3],
        angry: [-5, -3],
      }
    },
    {
      response: {
        emotion: 5,
        final: false,
        text: 'Eh'
      },
      demoResponse: {
        emotion: 0,
        final: false,
        text: 'Eh'
      },
      interactionCount: 0,
      name: 'Claudia',
      systemMessage: 'Ich bin Claudia und ich bin eine komplette Karen. Ich beschwere mich über alles was andere leute tun oder sagen. Ich mache gerne anderen das leben zur hölle und fahre ihnen über den mund.',
      lastMessage: '',
      tiles: {
        happy: [-2, -5],
        angry: [-6, -5],
      }
    },
    {
      response: {
        emotion: 5,
        final: false,
        text: 'Eh'
      },
      demoResponse: {
        emotion: 0,
        final: false,
        text: 'Eh'
      },
      interactionCount: 0,
      name: 'Thomas',
      systemMessage: 'Ich bin Thomas, ein Bergsteiger der gerne alleine sein will. Ich versuche alle leute so schnell es geht los zu werden. Ich antworte immer knapp und kurz und versuche mich direkt auszudrücken.',
      lastMessage: '',
      tiles: {
        happy: [-2, -5],
        angry: [-6, -5],
      }
    },
  ] as Character[],
};

export default config;
