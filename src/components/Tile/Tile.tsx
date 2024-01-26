import React, { FC } from 'react';
import { TileWrapper } from './Tile.styled';
import { Direction, Tiles } from '../../types';
import { vec2 } from 'gl-matrix';

interface TileProps {
   tile: Tiles;
   position: vec2;
   direction: Direction | undefined;
}

const Tile: FC<TileProps> = ({ tile }) => (
   <TileWrapper style={{
      left: `${tile.position[0]}em`,
      top: `${tile.position[1]}em`,
      backgroundImage: tile.image && `url(${tile.image})`,
      backgroundPositionX: `${tile.offset?.[0]}em`,
      backgroundPositionY: `${tile.offset?.[1]}em`,
   }}
      onClick={() => { console.log(tile.position.toString()) }}>
      {tile.message && <></>}
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