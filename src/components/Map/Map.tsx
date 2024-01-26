import React, { FC, useEffect, useRef } from 'react';
import { MapWrapper, RootScene, Player } from './Map.styled';
import Tile from '../Tile/Tile';
import useMapState from '../../states/MapState';
import { keyDownHandler, keyUpHandler, resetInput, tick } from '../../logic/controlls';
import { generateMap } from '../../logic/map';
import { Direction } from '../../types';
import clsx from 'clsx';

interface MapProps { }

const Map: FC<MapProps> = () => {
   const mapRef = useRef<HTMLDivElement>();
   const state = useMapState();

   useEffect(() => {
      if (!state.map.haveMap) {
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
      <RootScene
         className={clsx({
            move: state.player.moveDirection !== undefined,
            up: state.player.moveDirection === Direction.up,
            down: state.player.moveDirection === Direction.down,
            left: state.player.moveDirection === Direction.left,
            right: state.player.moveDirection === Direction.right,
         })} style={{
            left: `calc(50vw - 0.5em + ${-state.player.position[0]}em)`,
            top: `calc(50vh - 0.5em + ${-state.player.position[1]}em)`,
         }}
      >
         {state.tiles.map((tile) => {
            if (tile.image) {
               return <Tile tile={tile} key={tile.index} direction={state.player.direction} position={state.player.position} />
            }
         })}
      </RootScene>
      <Player className={clsx({
         up: state.player.direction === Direction.up,
         down: state.player.direction === Direction.down,
         left: state.player.direction === Direction.left,
         right: state.player.direction === Direction.right,
      })}
      ></Player>
   </MapWrapper>
};

export default Map;
