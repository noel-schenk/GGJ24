import { FC, useEffect, useState } from 'react';
import { StopwatchWrapper } from './Stopwatch.styled';
import useGlobalState from '../../GlobalState';

interface StopwatchProps {}

const Stopwatch: FC<StopwatchProps> = () => {
   const state = useGlobalState()
   const [update, setUpdate] = useState(0);


   useEffect(()=> {
      state.set('stopWatchStartTime', Date.now())

      const interval = setInterval(() => {
         setUpdate(Date.now());
     }, 100);

     state.subscribe('stopWatch', () => {
         if (!useGlobalState.get('stopWatch')) {
            clearInterval(interval);
         }
     })

     return () => clearInterval(interval);
   }, [])

 return <StopwatchWrapper>
   {formatMilliseconds(state.stopWatchStartTime, update)}
 </StopwatchWrapper>
};

export default Stopwatch;

export const formatMilliseconds = (timestamp: number, update: number) => {
   let x = update;
   let y = x;
   x = y;

   var now = Date.now();
   var elapsed = now - timestamp;

   var minutes = Math.floor(elapsed / 60000);
   var remaining_mSec = elapsed % 60000;
   var seconds = Math.floor(remaining_mSec / 1000);
   var milliseconds = remaining_mSec % 1000;
   return minutes + " Minuten " + seconds + " Sekunden " + milliseconds + " Millisekunden";
}