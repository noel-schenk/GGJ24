import React, { FC } from 'react';
import { MapWrapper } from './Map.styled';
import useGlobalState from '../../GlobalState';
import Tile from '../Tile/Tile';

interface MapProps { }

const Map: FC<MapProps> = () => {
   const state = useGlobalState();

   return <MapWrapper>
      {state.tiles.map((tile) => {
         return <Tile tile={tile} />
      })}
   </MapWrapper>
};

export default Map;
