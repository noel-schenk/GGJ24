import { createTile } from "../components/Tile/Tile";
import { DemoMap } from "../data/map";
import useMapState from "../states/MapState";

export function generateMap() {
    const tiles = useMapState.get('tiles');
    tiles.length = 0;

    let x = 0;
    let y = 0;

    DemoMap.split('\n').filter(s => s.length > 0).forEach(line => {
        line.split('').forEach(char => {
            createTile('')
        })
    })

    useMapState.set('haveMap', true);
}