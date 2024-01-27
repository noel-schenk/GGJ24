import { FC, useEffect } from 'react';
import { EndWrapper } from './End.styled';
import useGlobalState from '../../GlobalState';
import { View } from '../../types';
import { confetti } from '../Score/Score';
import { formatMilliseconds } from '../Stopwatch/Stopwatch';

interface EndProps {}

const End: FC<EndProps> = () => {
   const state = useGlobalState();

   useEffect(() => {
      const ci = setInterval(() => {
         confetti(true);
      }, 1000)

      return () => clearInterval(ci);
   }, []);

 return <EndWrapper>
      <h2>Vielen Dank fürs Spielen!</h2>
      <p>Du hast folgenden Score erreicht: <strong className='End__Score'>{state.score}</strong><br/>
      Deine Zeit:<br /><strong>{formatMilliseconds(state.stopWatchStartTime, 0)}</strong>
      <br/><br/>Wir hoffen, dass deine Reise durch Sad Town trotz der Traurigkeit ihrer Bewohner ein unvergessliches Erlebnis war. Deine Anwesenheit hat Licht in diese kleine Welt gebracht. Bis zum nächsten Mal, wenn die Wellen des Schicksals uns wieder zusammenführen.<br/><br/>Bleib glücklich und gesund!</p>
      <div onClick={() => state.set('show', [View.MAIN])} className='End__Close'>Weiterspielen</div>
 </EndWrapper>
};

export default End;
