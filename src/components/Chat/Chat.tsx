import { FC, useState } from 'react';
import { ChatWrapper } from './Chat.styled';
import { sendMessage } from '../../GPT';
import useGlobalState, { getActiveCharacter } from '../../GlobalState';
import { View } from '../../types';
import clsx from 'clsx';

interface ChatProps { }

const Chat: FC<ChatProps> = () => {
   const [chatInput, setChatInput] = useState('');
   const [editMode, setEditMode] = useState(false);

   const state = useGlobalState();

   const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      event.stopPropagation()
      if (event.key === 'Enter') {
         chatEnd()
      }
   }

   const chatEnd = () => {
      setChatInput('')
      setEditMode(false)
      sendMessage(chatInput)
   }

   const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (editMode === true) {
         const characters = state.get('characters');
         characters[state.activeCharacter].systemMessage = event.target.value;
         state.set('characters', characters)
         return;
      }

      setChatInput(event.target.value)

      if(event.target.value === 'edit') {
         setEditMode(true)
         setChatInput('')
      }
   }

   const onBlur = () => {
      state.set('show', [View.MAIN]);
   }

   return <ChatWrapper>
      <textarea autoFocus className={clsx({
         'Chat__Input': true,
         'Chat__Input--edit': editMode,
      })} value={editMode ? getActiveCharacter().systemMessage : chatInput} onKeyDown={onKeyDown} onChange={onChange} onBlur={onBlur} />
      <button className='Chat__Button' onClick={chatEnd}>Senden</button>
   </ChatWrapper>
};

export default Chat;
