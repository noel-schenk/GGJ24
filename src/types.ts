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

export enum Emotion {
  HAPPY,
  SAD,
}

export enum View {
  CHAT,
  MENU,
  MAIN,
}

export interface CharacterResponse {
  text: string;
  emotion: number;
  final: boolean;
}

export enum Direction {
  up,
  down,
  left,
  right,
}

export interface Player {
  direction: Direction;
  position: vec2;
  moveDirection: Direction | undefined;
}
