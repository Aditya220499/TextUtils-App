import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        let upperText = text.toUpperCase()
        setText(upperText)
        props.showAlert('Converted to upperCase!', 'success')
    }
    const handleDownClick = () =>{
        //console.log('Btn clicked')
        let lowerText = text.toLowerCase()
        setText(lowerText)
        props.showAlert('Converted to lowerCase!', 'success')
    }
    
    const handleOnChange = (event) =>{  // Whenever we listen to an event in React we get an object 'event'
        setText(event.target.value) // Set the value in the text box
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        navigator.clipboard.writeText(text.value)
        props.showAlert('Copied to clipboard!', 'success')
    }

    const handleClear = () => {
        setText('');
        props.showAlert('Cleared Text', 'success')
    }

    const [text, setText] = useState('');
    return (  
        <> 
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example Text area</label>
        <textarea className="form-control" value = {text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#1b222c':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert To Lower</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Upper</button>
    </div>
    <div className='container my-2' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>Words: {text.split(' ')
                    .filter(function (n) { return n !== '' })
                    .length}<br/>Characters: {text.length}</p>

        <h1> Preview </h1>
        <p>{text.length>0?text:"Please Enter text to Preview"}</p>
    </div>
    </> 
  )
}
