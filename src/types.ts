import { vec2 } from 'gl-matrix';

export interface Tiles {
    index: number;
    position: vec2;
    image: string;
    offset: vec2;
}

export interface Character {
    name: string;
    systemMessage: string;
    demoResponse: CharacterResponse;
}

export enum Emotion {
    HAPPY,
    SAD,
}

export interface CharacterResponse {
    text: string;
    emotion: Emotion;
    final: boolean;
}