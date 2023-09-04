import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
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
    const [text, setText] = useState("Enter text here...");
    
  return (
    <>
   <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea value={text} onChange={handleOnChange} className="form-control" id="mybox" rows="4"></textarea>
        <button className="btn btn-primary mx-2 mt-2" onClick={handleUpClick}>Conver to Uppercase</button>
        <button className="btn btn-primary mx-2 mt-2" onClick={handleULoClick}>Conver to Lowercase</button>
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
