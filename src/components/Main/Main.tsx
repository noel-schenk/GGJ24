import { FC } from 'react';
import { MainWrapper } from './Main.styled';
import Map from '../Map/Map';
import Score from '../Score/Score';
import Stopwatch from '../Stopwatch/Stopwatch';

interface MainProps { }

const Main: FC<MainProps> = () => {
   return <MainWrapper>
      <Map />
      <Score />
      <Stopwatch />
   </MainWrapper>
};

export default Main;
