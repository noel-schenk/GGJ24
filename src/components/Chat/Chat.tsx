import { FC, useState } from 'react';
import { ChatWrapper } from './Chat.styled';
import { sendMessage } from '../../GPT';

interface ChatProps {}

const Chat: FC<ChatProps> = () => {
   const [chatInput, setChatInput] = useState('');

   const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         sendMessage(chatInput)
      }
   }

   return <ChatWrapper>
      <input type='text' value={chatInput} onKeyDown={onEnter} onChange={(e) => setChatInput(e.target.value)} />
      <button onClick={() => sendMessage(chatInput)}>Senden</button>
   </ChatWrapper>
};

export default Chat;
