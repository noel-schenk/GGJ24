import { vec2 } from "gl-matrix";
import config from "../config";
import useMapState from "../states/MapState";
import { Direction, View } from "../types";
import { CollisionType } from "./map";
import { interact } from "../Interact";
import useGlobalState from "../GlobalState";
import { doLaugh } from "../components/Score/Score";

const tmp = vec2.create();
let pressed: Set<string> = new Set();

// Interactions
export function keyDownHandler(event: KeyboardEvent) {
  if (!["F5"].includes(event.key)) {
    event.preventDefault();
  }
  if (event.key === " ") {
    handleInteraction();
    return;
  }
  pressed.add(event.key);
}
export function keyUpHandler(event: KeyboardEvent) {
  event.preventDefault();
  pressed.delete(event.key);
}
export function resetInput() {
  pressed.clear();
}

export function tick() {
  const player = useMapState.get("player");
  if (player.moveDirection !== undefined) {
    return;
  }

  const y = (pressed.has("w") ? 1 : 0) + (pressed.has("s") ? -1 : 0);
  const x = (pressed.has("d") ? 1 : 0) + (pressed.has("a") ? -1 : 0);

  if (y > 0) {
    player.moveDirection = Direction.up;
  } else if (y < 0) {
    player.moveDirection = Direction.down;
  } else if (x > 0) {
    player.moveDirection = Direction.right;
  } else if (x < 0) {
    player.moveDirection = Direction.left;
  }

  if (player.moveDirection !== undefined) {
    player.direction = player.moveDirection;

    vec2.copy(tmp, player.position);

    switch (player.moveDirection) {
      case Direction.up:
        player.position[1] = player.position[1] - 1;
        break;
      case Direction.down:
        player.position[1] = player.position[1] + 1;
        break;
      case Direction.left:
        player.position[0] = player.position[0] - 1;
        break;
      case Direction.right:
        player.position[0] = player.position[0] + 1;
        break;
    }

    const map = useMapState.get("map");
    const target = map.collisions.get(
      `${player.position[0]}:${player.position[1]}`
    );
    if (target === CollisionType.BLOCK) {
      // we are colliding
      vec2.copy(player.position, tmp);
      player.moveDirection = undefined;
    } else {
      setTimeout(() => {
        requestAnimationFrame(() => {
          const player = useMapState.get("player");
          player.moveDirection = undefined;
          useMapState.set("player", player);
        });
      }, config().movementSpeed * 1000);
    }

    useMapState.set("player", player);
  }
}

export function handleInteraction() {
  const player = useMapState.get("player");
  const map = useMapState.get("map");
  const offsets = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let offset of offsets) {
    vec2.add(tmp, player.position, offset as vec2);
    if (map.characters.has(`${tmp[0]}:${tmp[1]}`)) {
      // we have interaction
      const character = map.characters.get(`${tmp[0]}:${tmp[1]}`);
      if (character && (character.active || character.response?.laugh)) {
        const { tile } = character;
        if (!tile) {
          continue;
        }

        if (character.response?.laugh) {
          tile.message = "Hahahaha!";
          useMapState.set("dt", Date.now());
          doLaugh();
          return;
        }

        interact(character).then(({ emotion, final, text, laugh }) => {
          tile.message = text;
          useMapState.set("dt", Date.now());

          const checkFinish = () => {
            if (
              !useGlobalState
                .get("characters")
                .find((character) => character.active)
            ) {
              useGlobalState.set("show", [View.END, View.MAIN]);
              useGlobalState.set("stopWatch", false);
            }
          };

          if (laugh) {
            character.active = false;
            vec2.copy(tile!.offset, character.tiles.laugh);
            checkFinish();
            return;
          }

          if (emotion < 1) {
            character.active = false;
            vec2.copy(tile!.offset, character.tiles.angry);
            checkFinish();
            return;
          }
          if (emotion > 10) {
            character.active = false;
            vec2.copy(tile.offset, character.tiles.happy);
            checkFinish();
            return;
          }
          if (final) {
            character.active = false;
            checkFinish();
            return;
          }
          handleInteraction();
        });
      }
      return;
    }
  }
}
