import React, { FC } from 'react';
import { TileWrapper } from './Tile.styled';
import { Tiles } from '../../types';
import { vec2 } from 'gl-matrix';

interface TileProps {
   tile: Tiles
}

const Tile: FC<TileProps> = ({ tile: { image, offset, position } }) => (
   <TileWrapper>

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