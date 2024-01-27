import { createTile } from "../components/Tile/Tile";
import { DemoMap } from "../data/DemoMap";
import useMapState from "../states/MapState";
import image from '../assets/spriteatlas.png';
import { vec2 } from "gl-matrix";
import { Character, InteractionData } from "../types";
import config from "../config";

export enum CollisionType {
    BLOCK,
    OVERLAP,
}

const tileOffsets = {
    b: vec2.fromValues(0, 0),
    m: vec2.fromValues(-1, 0),
    g: vec2.fromValues(-2, 0),
    t: vec2.fromValues(-3, 0),
    0: vec2.fromValues(-1, -4),
    1: vec2.fromValues(-2, -6),
    2: vec2.fromValues(-3, -2),
    '|': vec2.fromValues(-4, 0),
    '/': vec2.fromValues(-5, 0),
    '\\': vec2.fromValues(-6, 0),
    '=': vec2.fromValues(-7, 0),
    '#': vec2.fromValues(-8, 0),
}
const tileCollision = {
    '#': CollisionType.OVERLAP,
}

export function generateMap(mapData = DemoMap) {
    const map = useMapState.get('map');
    const tiles = useMapState.get('tiles');
    tiles.length = 0;

    let x = 0;
    let y = 0;

    const collisions: Map<string, number> = new Map();
    const interactions: Map<string, InteractionData> = new Map();

    mapData.split('\n').filter(s => s.length > 0).forEach(line => {
        line.split('').forEach(char => {
            if (char === 's') {
                const player = useMapState.get('player');
                player.position[0] = x;
                player.position[1] = y;
                useMapState.set('player', player);
            }
            const offset = tileOffsets[char as keyof typeof tileOffsets];
            const collision = tileCollision[char as keyof typeof tileCollision] ?? CollisionType.BLOCK;
            if (offset) {
                const tile = createTile(offset && image, offset, vec2.fromValues(x, y));
                tiles.push(tile);
                collisions.set(`${x}:${y}`, collision);

                if (!Number.isNaN(parseInt(char))) {
                    // spawn a NPC
                    interactions.set(`${x}:${y}`, {
                        character: config.characters[parseInt(char)],
                        tile: tile,
                        active: true,
                    });
                    // tile.message = 'Guten Tag. Es ist immer schön, jemanden zu sehen, auch wenn meine Stimmung nicht die beste ist.'
                }
            }
            x++;
        })
        x = 0;
        y++;
    })

    map.haveMap = true;
    map.collisions = collisions;
    map.interactions = interactions;
    useMapState.set('map', map);
}