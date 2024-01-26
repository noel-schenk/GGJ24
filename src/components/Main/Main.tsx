import { FC } from 'react';
import { MainWrapper } from './Main.styled';
import Map from '../Map/Map';

interface MainProps { }

const Main: FC<MainProps> = () => {
   return <MainWrapper>
      <Map />
   </MainWrapper>
};

export default Main;
