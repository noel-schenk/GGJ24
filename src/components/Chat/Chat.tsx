import { FC, useState } from 'react';
import { ChatWrapper } from './Chat.styled';
import { sendMessage } from '../../GPT';
import useGlobalState from '../../GlobalState';
import { View } from '../../types';

interface ChatProps { }

const Chat: FC<ChatProps> = () => {
   const [chatInput, setChatInput] = useState('');
   const state = useGlobalState();

   const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      event.stopPropagation()
      if (event.key === 'Enter') {
         setChatInput('')
         sendMessage(chatInput)
      }
   }
   const onBlur = () => {
      state.set('show', [View.MAIN]);
   }

   return <ChatWrapper>
      <input autoFocus className='Chat__Input' type='text' value={chatInput} onKeyDown={onKeyDown} onChange={(e) => setChatInput(e.target.value)} onBlur={onBlur} />
      <button className='Chat__Button' onClick={() => { sendMessage(chatInput), setChatInput('') }}>Senden</button>
   </ChatWrapper>
};

export default Chat;
