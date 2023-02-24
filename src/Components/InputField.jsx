import React, { useState } from 'react'

function InputField(props) {
    // const [userInput, setUserInput] = useState('## Type Some Markdown here!')

    // const changeTextHandler = (e) => {
    //     setUserInput((prev) => e.target.value)
    //     console.log(userInput)
    // }
    return (
        <>
            <textarea onChange={props.changeTextHandler} rows='30' cols='80' value={props.input}>
            </textarea>
        </>
    )
}

export default InputField
