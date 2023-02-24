import React, { useState } from 'react'

function InputField(props) {
    // const [userInput, setUserInput] = useState('## Type Some Markdown here!')

    // const changeTextHandler = (e) => {
    //     setUserInput((prev) => e.target.value)
    //     console.log(userInput)
    // }
    return (
        <div className='input-area'>
            <section>
                <h1>Type Below</h1>
                <textarea onChange={props.changeTextHandler} rows='35' cols='80' value={props.input}>
                </textarea>
            </section>
        </div>
    )
}

export default InputField
