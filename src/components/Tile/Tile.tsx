import React, { FC } from 'react';
import { TileWrapper } from './Tile.styled';
import { Direction, Tiles } from '../../types';
import { vec2 } from 'gl-matrix';
import clsx from 'clsx';

interface TileProps {
   tile: Tiles;
   position: vec2;
   direction: Direction | undefined;
}

const Tile: FC<TileProps> = ({ tile, direction, position }) => (
   <TileWrapper className={clsx({
      move: direction !== undefined,
      up: direction === Direction.up,
      down: direction === Direction.down,
      left: direction === Direction.left,
      right: direction === Direction.right,
   })} style={{
      left: `${position?.[0] + tile.position[0]}em`,
      right: `${position?.[1] + tile.position[1]}em`
   }}>

   </TileWrapper>
);

export default Tile;


let index = 0;
export function createTile(image: string, offset: vec2, position: vec2) {
   return {
      index: index++,
      image,
      offset,
      position,
   } as Tiles
}
export function createDummyTile() {
   return createTile('', vec2.fromValues(index, index), vec2.fromValues(0, 0))
}