import React, { FC, useEffect, useRef } from 'react';
import { MapWrapper } from './Map.styled';
import Tile from '../Tile/Tile';
import useMapState from '../../states/MapState';
import { keyDownHandler, keyUpHandler, resetInput, tick } from '../../logic/controlls';
import { generateMap } from '../../logic/map';

interface MapProps { }

const Map: FC<MapProps> = () => {
   const mapRef = useRef<HTMLDivElement>();
   const state = useMapState();

   useEffect(() => {
      if (!state.haveMap) {
         // generate Map
         generateMap();
      }
      document.addEventListener('keydown', keyDownHandler);
      document.addEventListener('keyup', keyUpHandler);
      document.addEventListener('blur', resetInput);
      const interval = setInterval(tick, 1000 / 60);
      return () => {
         document.removeEventListener('keydown', keyDownHandler);
         document.removeEventListener('keyup', keyUpHandler);
         document.removeEventListener('blur', resetInput);
         clearTimeout(interval);
      }
   }, [state.dt]);

   return <MapWrapper ref={mapRef as any}>
      {state.tiles.map((tile) => {
         return <Tile tile={tile} key={tile.index} direction={state.player.direction} position={state.player.position} />
      })}
   </MapWrapper>
};

export default Map;
