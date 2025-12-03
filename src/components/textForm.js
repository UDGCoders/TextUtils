import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const uppercase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Letters Converted to upper case","success")
    }
    const lowercase = () => {
        let newText = text.toLocaleLowerCase()
        setText(newText)
        props.showAlert("Letters Converted to lower case","success")
    }
    const clearText = () => {
        let newText = ''
        setText(newText)
        props.showAlert("text has been cleared","success")
    }
    const chnaged = (event) => {

        setText(event.target.value)
    }
    return (
        <>
            <div className='container my-5'>
                <h1>{props.heading}</h1>
                <textarea name="form-label" id="mybox" value={text} onChange={chnaged} rows="8" 
                className='w-100 rounded-3 my-3' />
                <button className='btn btn-outline-primary' onClick={uppercase}>Convert to UppperCase</button>
                <button className='btn btn-outline-primary mx-2 my-2' onClick={lowercase}>Convert to lower case</button>
                <button className='btn btn-outline-primary mx-2 my-2' onClick={clearText}>Clear Text</button>
            </div>
            <div className="container">
                <h1>Your Text Summary is here</h1>
                <p>Your text has <b> {text.split(" ").filter((element)=>{return element.length!==0}).length} words </b>
                    and <b> {text.length} characters </b>
                </p>
                <p>{0.008 * text.split("/\s+\n/").length} minutes to read this text</p>
            </div>
            <div className="container">
                <h2>Your Text Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
