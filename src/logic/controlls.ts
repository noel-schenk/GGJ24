import config from "../config";
import useMapState from "../states/MapState";
import { Direction } from "../types";

let pressed: Set<string> = new Set();

// Interactions
export function keyDownHandler(event: KeyboardEvent) {
    pressed.add(event.key);
}
export function keyUpHandler(event: KeyboardEvent) {
    pressed.delete(event.key);
}
export function resetInput() {
    pressed.clear();
}

export function tick() {
    const player = useMapState.get('player');
    if (player.direction) {
        return;
    }

    const y = (pressed.has('w') ? 1 : 0) + (pressed.has('s') ? -1 : 0);
    const x = (pressed.has('d') ? 1 : 0) + (pressed.has('a') ? -1 : 0);

    console.log(y, x)

    if (y > 0) {
        player.direction = Direction.up
    } else if (y < 0) {
        player.direction = Direction.down
    } else if (x > 0) {
        player.direction = Direction.right
    } else if (x < 0) {
        player.direction = Direction.left
    }

    if (player.direction) {
        setTimeout(() => {
            const player = useMapState.get('player');
            player.direction = undefined;
            useMapState.set('player', player);
        }, config.movementSpeed * 1000)
    }

    useMapState.set('player', player);
}