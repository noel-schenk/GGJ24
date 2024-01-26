import './App.css'
import Main from './components/Main/Main'
import Chat from './components/Chat/Chat'
import Menu from './components/Menu/Menu'
import useGlobalState from './GlobalState'
import { View } from './types'
import { useEffect } from 'react'
import config from './config';

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
      {state.show.includes(View.CHAT) && <Chat />}
      {state.show.includes(View.MAIN) && <Main />}
    </>
  )
}

export default App
