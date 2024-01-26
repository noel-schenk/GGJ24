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
         <h1>Freude im Traurigen Dorf</h1>
         <p>In einem Dorf, so trüb und leer,<br/>
            kamst du her, die Herzen schwer.<br/>
            Dein Ziel so klar, ein lichter Schein,<br/>
            bringt Lachen und Freude rein.</p>
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
