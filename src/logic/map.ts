import { createTile } from "../components/Tile/Tile";
import { DemoMap } from "../data/map";
import useMapState from "../states/MapState";
import image from '../assets/spriteatlas.png';
import { vec2 } from "gl-matrix";

const tileOffsets = {
    b: vec2.fromValues(0, 0),
}

export function generateMap() {
    const map = useMapState.get('map');
    const tiles = useMapState.get('tiles');
    tiles.length = 0;

    let x = 0;
    let y = 0;

    DemoMap.split('\n').filter(s => s.length > 0).forEach(line => {
        line.split('').forEach(char => {
            const offset = tileOffsets[char as keyof typeof tileOffsets];
            const tile = createTile(offset && image, offset, vec2.fromValues(x, y));
            tiles.push(tile);
            x++;
        })
        x = 0;
        y++;
    })

    map.haveMap = true;
    useMapState.set('map', map);
}