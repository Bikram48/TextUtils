import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter something here")

    function makeUppercase() {
        setText(text.toUpperCase())
        console.log(props.alert)
        props.alert("All letters are uppercased", "success")
    }

    function makeLowercase() {
        setText(text.toLowerCase())
        props.alert("All letters are lowercased", "success")
    }

    function displayText(e) {
        setText(e.target.value)
    }

    function clearText() {
        setText("")
        props.alert("Text are cleared", "success")
    }

    function copyText(e) {
        navigator.clipboard.writeText(document.getElementById('textArea').value)
        props.alert("Text is copied", "success")
    }

    function removeSpaces() {
        setText(text.replace(/\s/g, ''))
        props.alert("All whitespaces are removed", "success")
    }

    return (
        <div className='container'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode==='light'?'dark':'light'}`}>{props.title}</label>
                <textarea className="form-control" id="textArea" rows="6" onChange={displayText}  value={text}></textarea>
            </div>
            <div className="buttons">
                <button className="btn btn-primary" type="submit" onClick={makeUppercase}>Convert to Uppercase</button>
                <button className="btn btn-primary m-2" type="submit" onClick={makeLowercase}>Convert to lowercase</button>
                <button className="btn btn-primary m-2" type="submit" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary m-2" type="submit" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary m-2" type="submit" onClick={removeSpaces}>Remove Extra Spaces</button>
            </div>

            <h2 className={`mt-5 text-${props.mode==='light'?'dark':'light'}`}>Preview</h2>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text}</p>
        </div>
    )
}
