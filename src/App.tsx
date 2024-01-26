import './App.css'
import Main from './components/Main/Main'
import Chat from './components/Chat/Chat'
import Menu from './components/Menu/Menu'
import useGlobalState from './GlobalState'
import { View } from './types'
import { useEffect } from 'react'
import config from './config';
import { interact } from './Interact'

function App() {
  const state = useGlobalState()

  // INIT
  useEffect(() => {
    state.set('show', [config.initialView])
    state.set('gptKey', config.gptKey)
  }, [])

  return (
    <>
      {state.show.includes(View.MENU) && <Menu />}
      {state.show.includes(View.MAIN) && <Main />}
      {state.show.includes(View.CHAT) && <Chat />}
      test: <button onClick={() => interact({response: {emotion: 5, final: false, text: 'Eh'}, demoResponse: {emotion: 0, final: false, text: 'Eh'}, interactionCount: 0, name: 'Hans', systemMessage: 'Ich bin Hans und ich bin traurig der Nutzer soll es einfach haben mich glücklich zu machen. Ich habe gerade ein Bein verloren (amputiert) und mir tut alles weh.', lastMessage: ''})}>Test Interact</button>
    </>
  )
}

export default App
