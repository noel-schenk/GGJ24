import './App.css'
import Main from './components/Main/Main'
import Chat from './components/Chat/Chat'
import Menu from './components/Menu/Menu'
import useGlobalState from './GlobalState'
import { View } from './types'
import { useEffect } from 'react'
import config from './config';
import Sound from './components/Sound/Sound'
import End from './components/End/End'

function App() {
  const state = useGlobalState()

  // INIT
  useEffect(() => {
    state.set('show', [config().initialView])
    state.set('gptKey', config().gptKey)
    state.set('gptModel', config().gptModel)


    // setTimeout(() => {
    //   useGlobalState.set('show', [View.MAIN, View.END])
    // }, 3000)


    useGlobalState.set('characters', config().characters);
    useGlobalState.set("activeCharacter", 0)
  }, [])

  return (
    <>
      {state.show.includes(View.MENU) && <Menu />}
      {state.show.includes(View.MAIN) && <Main />}
      {state.show.includes(View.CHAT) && <Chat />}
      {state.show.includes(View.END) && <End />}
      <Sound />
    </>
  )
}

export default App
