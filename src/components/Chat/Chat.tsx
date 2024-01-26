import { FC, useState } from 'react';
import { ChatWrapper } from './Chat.styled';

interface ChatProps {}

const Chat: FC<ChatProps> = () => {
   const [chatInput, setChatInput] = useState('');

   const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         
       }
   }

   return <ChatWrapper>
      <input type='text' value={chatInput} onKeyDown={onEnter} onChange={(e) => setChatInput(e.target.value)} />
   </ChatWrapper>
};

export default Chat;
