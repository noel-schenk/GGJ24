import  { FC } from 'react';
import { MenuWrapper } from './Menu.styled';
import useGlobalState from '../../GlobalState';
import { View } from '../../types';
import IntroPng from '../../assets/intro.png';

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
   const state = useGlobalState();

   return <MenuWrapper>
      <div className='Menu__Interaction'>
         <h1>The Laughter of Sad Village</h1>
         <p>In Sad Village, where gloom reigns, you arrive with a mission of joy. Your task: to uplift hearts through song, craft, and play. The villagers await your magic touch to turn their sadness into laughter and break the ancient curse. The journey to transform Sad Village into Joyous Hamlet begins with you.</p>
         <h2>Enter Your GPT Key</h2> 
         <div className='Menu__Keycontainer'>           
            <input className='Menu__Input' type='text' value={state.gptKey} placeholder='Input your ChatGPT Key' onChange={e => state.set('gptKey', e.target.value)} />
            <button onClick={() => state.set('show', [View.MAIN])}>Continue</button>
         </div>
      </div>
      <img className='Menu__Cover' src={IntroPng} />
   </MenuWrapper>
};

export default Menu;
