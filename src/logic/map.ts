import { createTile } from "../components/Tile/Tile";
import { DemoMap } from "../data/DemoMap";
import useMapState from "../states/MapState";
import image from '../assets/spriteatlas.png';
import { vec2 } from "gl-matrix";

export enum CollisionType {
    BLOCK,
    OVERLAP,
}

const tileOffsets = {
    b: vec2.fromValues(0, 0),
    m: vec2.fromValues(-1, 0),
    g: vec2.fromValues(-2, 0),
    t: vec2.fromValues(-3, 0),
}
const tileCollision = {
    b: CollisionType.BLOCK,
    m: CollisionType.BLOCK,
    g: CollisionType.BLOCK,
    t: CollisionType.BLOCK,
}

export function generateMap(mapData = DemoMap) {
    const map = useMapState.get('map');
    const tiles = useMapState.get('tiles');
    tiles.length = 0;

    let x = 0;
    let y = 0;

    const collisions: Map<string, number> = new Map();

    mapData.split('\n').filter(s => s.length > 0).forEach(line => {
        line.split('').forEach(char => {
            if (char === 's') {
                const player = useMapState.get('player');
                player.position[0] = x;
                player.position[1] = y;
                useMapState.set('player', player);
            }
            const offset = tileOffsets[char as keyof typeof tileOffsets];
            const collision = tileCollision[char as keyof typeof tileCollision];
            if (offset) {
                const tile = createTile(offset && image, offset, vec2.fromValues(x, y));
                tiles.push(tile);
                collisions.set(`${x}:${y}`, collision);
            }
            x++;
        })
        x = 0;
        y++;
    })

    map.haveMap = true;
    map.collisions = collisions;
    useMapState.set('map', map);
}