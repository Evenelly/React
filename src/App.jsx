import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greetings'

function App() {
  const [count, setCount] = useState(0)


  const change1 = function(){
    setCount(() => count + 1)
  }

  const change2 = function(){
    setCount("test")
  }


  return (
    <>
    <button onClick={change}>{count}</button>
    <button onClick={change}>{count}</button>
    </>
  )
}

export default App
