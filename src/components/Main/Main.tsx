import { FC } from 'react';
import { MainWrapper } from './Main.styled';
import Map from '../Map/Map';
import Score from '../Score/Score';

interface MainProps { }

const Main: FC<MainProps> = () => {
   return <MainWrapper>
      <Map />
      <Score />
   </MainWrapper>
};

export default Main;
