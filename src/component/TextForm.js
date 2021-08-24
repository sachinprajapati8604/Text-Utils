import React, { useState } from 'react';


export default function TextForm(props) {


    const handleUpClick = () => {
        // console.log(text)
        let newText = text.toUpperCase();
        // console.log(newText)
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")

    }
    const handleonChnage = (event) => {
        // console.log("onchnage ")
        setText(event.target.value);
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("text copied")
        props.showAlert("Text copied ","success")

    }
    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/); //remove all the spaces using regex 
        setText(newText.join(" "));    //join with one space
        props.showAlert("Extra sapace Removed","success")

    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading} </h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" placeholder="Enter the text here...." value={text} onChange={handleonChnage} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#0f0021', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>

                <div className="button-box">
                    <button className="btn btn-primary mx-2" onClick={handleUpClick} > Convert to Uppercase </button>
                    <button className="btn btn-primary mx-2" onClick={handleLowClick} > Convert to Lowercase </button>
                    <button className="btn btn-primary mx-2" onClick={handleCopy} > Copy to Clipboard </button>
                    <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces} > Remove Extra Spaces </button>
                </div>


            </div>
            <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p> {text.trim().split(" ").length} words and {text.length} characters </p>
                <p> {0.008 * text.split(" ").length} minutes read </p>
                <h3>Preview</h3>
                <p> {text} </p>
            </div>
        </>
    )
}
