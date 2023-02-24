import React from 'react'
import ReactMarkdown from 'react-markdown'

function OutputField(props) {
    return (
        <div className='output-area'>
            <article>
                <ReactMarkdown>
                    {props.output}
                </ReactMarkdown>
            </article>
        </div>
    )
}

export default OutputField
