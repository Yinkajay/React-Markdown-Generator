import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'
import InputField from './Components/InputField'

function App() {
  const [input, setInput] = useState('**Type Some Markdown Here!**')

  const changeInputHandler = (e) => {
    setInput(e.target.value)
  }

  return (
    <>
      <h1>Hello</h1>
      <InputField changeTextHandler={changeInputHandler} input={input}/>
      <article>
        <ReactMarkdown>
          {input}
        </ReactMarkdown>
      </article>
    </>
  )
}

export default App
