import { FC, useState } from 'react';
import { ChatWrapper } from './Chat.styled';
import { sendMessage } from '../../GPT';
import useGlobalState, { getActiveCharacter } from '../../GlobalState';
import { View } from '../../types';
import clsx from 'clsx';
import config from '../../config';

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

      if(event.target.value === 'zombie') {
         document.querySelector('body')!.style.filter = 'hue-rotate(180deg)';
         useGlobalState.set('altMode', 'zombie')
         reloadConfigSystemMessage();
      }

      if(event.target.value === 'hate') {
         document.querySelector('body')!.style.filter = 'invert(1)';
         useGlobalState.set('altMode', 'hate')
         reloadConfigSystemMessage();
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

export const reloadConfigSystemMessage = () => {
   useGlobalState.get('characters').forEach((character, index) => {
      character.systemMessage = config().characters[index].systemMessage
   })
}
