import { ChatGPTAPI } from "chatgpt";
import { vec2 } from "gl-matrix";

export interface Tiles {
  index: number;
  position: vec2;
  image: string;
  offset: vec2;
}

export interface Character {
  name: string;
  systemMessage: string;
  lastMessage: string;
  interactionCount: number;
  demoResponse: CharacterResponse;
  response: CharacterResponse;
}

export interface CharacterResponse {
  text: string;
  emotion: number;
  final: boolean;
}

export enum View {
  CHAT,
  MENU,
  MAIN,
}
