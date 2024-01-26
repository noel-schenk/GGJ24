import React, { FC } from 'react';
import { TileWrapper } from './Tile.styled';
import { Tiles } from '../../types';

interface TileProps {
   tile: Tiles
}

const Tile: FC<TileProps> = () => (
   <TileWrapper>
      Tile Component
   </TileWrapper>
);

export default Tile;
