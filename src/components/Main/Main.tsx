import React, { FC } from 'react';
import { MainWrapper } from './Main.styled';
import Map from '../Map/Map';
import useGlobalState from '../../GlobalState';

interface MainProps { }

const Main: FC<MainProps> = () => {
   return <MainWrapper>
      <Map />
   </MainWrapper>
};

export default Main;
