import  { FC } from 'react';
import { MenuWrapper } from './Menu.styled';
import useGlobalState from '../../GlobalState';
import { View } from '../../types';

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
   const state = useGlobalState();

   return <MenuWrapper>
      <h1>Enter Your GPT Key</h1>
      <input type='text' value={state.gptKey} placeholder='Input your ChatGPT Key' onChange={e => state.set('gptKey', e.target.value)} />
      <button onClick={() => state.set('show', [View.MAIN])}>Continue</button>
   </MenuWrapper>
};

export default Menu;
