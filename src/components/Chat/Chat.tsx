import { FC, useState } from 'react';
import { ChatWrapper } from './Chat.styled';
import { sendMessage } from '../../GPT';

interface ChatProps {}

const Chat: FC<ChatProps> = () => {
   const [chatInput, setChatInput] = useState('');

   const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      event.stopPropagation()
      if (event.key === 'Enter') {
         setChatInput('')
         sendMessage(chatInput)
      }
   }

   return <ChatWrapper>
      <input className='Chat__Input' type='text' value={chatInput} onKeyDown={onKeyDown} onChange={(e) => setChatInput(e.target.value)} />
      <button className='Chat__Button' onClick={() => {sendMessage(chatInput), setChatInput('')}}>Senden</button>
   </ChatWrapper>
};

export default Chat;
