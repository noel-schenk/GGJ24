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
    if (player.moveDirection !== undefined) {
        return;
    }

    const y = (pressed.has('w') ? 1 : 0) + (pressed.has('s') ? -1 : 0);
    const x = (pressed.has('d') ? 1 : 0) + (pressed.has('a') ? -1 : 0);

    if (y > 0) {
        player.moveDirection = Direction.up
    } else if (y < 0) {
        player.moveDirection = Direction.down
    } else if (x > 0) {
        player.moveDirection = Direction.right
    } else if (x < 0) {
        player.moveDirection = Direction.left
    }

    if (player.moveDirection !== undefined) {
        player.direction = player.moveDirection;

        switch (player.moveDirection) {
            case Direction.up: player.position[1] = player.position[1] + 1; break;
            case Direction.down: player.position[1] = player.position[1] - 1; break;
            case Direction.left: player.position[0] = player.position[0] + 1; break;
            case Direction.right: player.position[0] = player.position[0] - 1; break;
        }

        setTimeout(() => {
            requestAnimationFrame(() => {
                const player = useMapState.get('player');
                player.moveDirection = undefined;
                useMapState.set('player', player);
            })
        }, config.movementSpeed * 1000);

        useMapState.set('player', player);
    }

}