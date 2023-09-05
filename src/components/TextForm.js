import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const countWord = ()=>{
        const wordNo = text===""?0:text.trim().split(/\s+/).length;
        return wordNo;
    }
    const countCharacter = ()=>{
        const wordArray =text.trim().split(/\s+/);
        const allCharacter = wordArray.toString();
        const NoCommaCharacter = allCharacter.replaceAll(",", "");

        return NoCommaCharacter.length;
    }
    const handleUpClick=()=>{
        // console.log(text.toUpperCase());
        const upperText = text.toUpperCase();
        setText(upperText);
    }
    const handleULoClick = ()=>{
        const newText = text.toLocaleLowerCase();
        setText(newText);
    }
    //  HANDLING EVENT 🧡🧡🧡
    const handleOnChange = (event) =>{
        console.log("handle on change");
        setText(event.target.value);
    }
    // THIS IS USE STATE 🧡🧡🧡
    const [text, setText] = useState("Enter text here");
    
  return (
    <>
   <div className="container my-4">
        <h2>{props.heading}</h2>
        <textarea value={text} onChange={handleOnChange} className="form-control" id="mybox" rows="4"></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Conver to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleULoClick}>Conver to Lowercase</button>
    </div>

    <div className="container">
        <h2>Text Summery</h2>
        <p>{countWord()} Words and {countCharacter()} Character </p>
        <p>{0.008*countWord()} Minutes to Read</p>

        <h2>Text Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
TextForm.propTypes = {
    heading:PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading: "Enter the text to analize"
}
