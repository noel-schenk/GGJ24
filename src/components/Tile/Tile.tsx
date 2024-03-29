import { FC, useEffect, useRef } from 'react';
import { MessageWrapper, TileWrapper } from './Tile.styled';
import { Direction, Tiles } from '../../types';
import { vec2 } from 'gl-matrix';
import useMapState from '../../states/MapState';

interface TileProps {
   tile: Tiles;
   position: vec2;
   direction: Direction | undefined;
}

const Tile: FC<TileProps> = ({ tile }) => {
   const messageBox = useRef<HTMLDivElement>();

   useEffect(() => {
      if (tile.message && messageBox.current) {
         let interval: any = undefined;
         setTimeout(() => {
            interval = setInterval(() => {
               messageBox.current?.scrollBy({
                  behavior: 'smooth',
                  top: 1,
               })
            }, 1000 / 30);
         }, 3000);

         const timeout = setTimeout(() => {
            tile.message = '';
            useMapState.set('dt', Date.now());
         }, 20000);
         return () => {
            clearTimeout(timeout);
            clearInterval(interval);
         }
      }
   }, [tile.message]);


   return <TileWrapper style={{
      left: `${tile.position[0]}em`,
      top: `${tile.position[1]}em`,
      backgroundImage: tile.image && `url(${tile.image})`,
      backgroundPositionX: `${getTileO(tile, 0)}em`,
      backgroundPositionY: `${tile.offset?.[1]}em`,
   }}
      onClick={() => { console.log(tile.position.toString()) }}>
      {tile.message && <MessageWrapper ref={messageBox as any}>{tile.message}</MessageWrapper>}
   </TileWrapper>
};

function getTileO(tile: Tiles, offset: number) {
   if (tile.offsetDyn) {
      const base = tile.offset?.[offset] - (tile.offset?.[offset] % 4);
      const baseOffset = ((tile.offset?.[offset] - tile.offsetDyn?.[offset]) % 4);

      return base + baseOffset;
   } else {
      return tile.offset?.[offset];
   }
}

export default Tile;


let index = 0;
export function createTile(image: string, offset: vec2, position: vec2) {
   return {
      index: index++,
      image,
      offset,
      position,
      offsetDyn: vec2.create(),
   } as Tiles
}
export function createDummyTile() {
   return createTile('', vec2.fromValues(index, index), vec2.fromValues(0, 0))
}