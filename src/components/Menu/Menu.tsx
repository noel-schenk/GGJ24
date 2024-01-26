import React, { FC } from 'react';
import { MenuWrapper } from './Menu.styled';
import useGlobalState from '../../GlobalState';

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
   const state = useGlobalState();

   return <MenuWrapper>
      <input type='text' value={state.gptKey} placeholder='Input your ChatGPT Key' onChange={e => state.set('gptKey', e.target.value)} />
   </MenuWrapper>
};

export default Menu;
