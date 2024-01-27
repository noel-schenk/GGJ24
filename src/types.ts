import { vec2 } from "gl-matrix";

export interface Tiles {
  index: number;
  position: vec2;
  image: string;
  offset: vec2;
  message: string;
}

export interface Character {
  name: string;
  systemMessage: string;
  lastMessage: string;
  interactionCount: number;
  demoResponse: CharacterResponse;
  response: CharacterResponse;
  tiles: {
    start: [number, number];
    happy: [number, number];
    angry: [number, number];
  };
  voice: string;
  pitch: number;
  rate: number;
  active: boolean;
  tile: Tiles;
}

export interface CharacterResponse {
  text: string;
  emotion: number;
  final: boolean;
  laugh: boolean;
}

export enum View {
  CHAT,
  MENU,
  MAIN,
}

export enum Direction {
  up,
  down,
  left,
  right,
}

export interface Player {
  direction: Direction;
  moveDirection: Direction | undefined;
  position: vec2;
}
