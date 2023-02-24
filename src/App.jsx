import { useState } from 'react'
import './App.css'
import InputField from './Components/InputField'
import OutputField from './Components/OutputField'

function App() {
  const [input, setInput] = useState('**Type Some Markdown Here!**')

  const changeInputHandler = (e) => {
    setInput(e.target.value)
  }

  return (
    <>
      <InputField changeTextHandler={changeInputHandler} input={input} />
      <OutputField output={input} />
    </>
  )
}

export default App
