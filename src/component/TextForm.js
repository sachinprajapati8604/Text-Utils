import React, { useState } from 'react';


export default function TextForm(props) {


    const handleUpClick = () => {
        // console.log(text)
        let newText = text.toUpperCase();
        // console.log(newText)
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")

    }
    const handleonChnage = (event) => {
        // console.log("onchnage ")
        setText(event.target.value);
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges(); ///remove selection from text
        // alert("text copied")
        props.showAlert("Text copied ", "success")

    }
    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/); //remove all the spaces using regex 
        setText(newText.join(" "));    //join with one space
        props.showAlert("Extra sapace Removed", "success")

    }
    const handleCapitalize = () => {
        let text_arr = text.split(" ");
        for (let i = 0; i < text_arr.length; i++) {
            text_arr[i] = text_arr[i].charAt(0).toUpperCase() + text_arr[i].slice(1);
        }
        let newText = text_arr.join(" ");
        setText(newText);
        props.showAlert("Text Capitalize ", "success")

    }


   

    const [text, setText] = useState('');
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="my-3 heading">{props.heading} </h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" placeholder="Enter the text here...." value={text} onChange={handleonChnage} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#0f0021', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>

                <div className="button-box">
                    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick} > Convert to Uppercase </button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowClick} > Convert to Lowercase </button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopy} > Copy to Clipboard </button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces} > Remove Extra Spaces </button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCapitalize} > Capitalize Text </button>

                </div>


            </div>
            <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p> {text.trim().split(/\s+/).filter((e)=>{return  e.length!==0}).length} words and {text.length} characters </p>
                <p> {0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} minutes read </p>
                <h3>Preview</h3>
                <p id="preview"> {text.length>0?text:"Nothing to preview"} </p>
            </div>
        </>
    )
}
