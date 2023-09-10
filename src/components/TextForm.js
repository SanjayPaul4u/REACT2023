import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const countWord = ()=>{
        // BEST WORD COUNT FUNCTION 🧡🧡🧡
        const wordNo = text.split(" ").filter((e)=>{return e.length!==0}).length;
        console.log(wordNo);
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
        props.showAlert("success", "Converted to the Uppercase");
    }
    const handleULoClick = ()=>{
        const newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("success", "Converted to the Lowercase");
    }
    const handleClearClick = ()=>{
        const newText = "";
        setText(newText);
        props.showAlert("danger", "Text has been cleared");
    }
    const handleGreenTextClick = () =>{
        const myBox = document.getElementById("mybox");
        myBox.style.color = "Green";
        props.showAlert("success", "Text color changed to Green");
    }
    
    const handleCopyClick = () =>{
        const myBox = document.getElementById("mybox");
        myBox.select();
        navigator.clipboard.writeText(myBox.value);
        document.getSelection().removeAllRanges();
        props.showAlert("success", "Text Copied");

    }
     
    const handleRemoveExSpaceClick = ()=>{
        const newText = text.split(/\s+/);
        // console.log(newText.join(" "));
        setText(newText.join(" "));  
        props.showAlert("success", "Extra spaces has been removed");      
    }
    //  HANDLING EVENT
    const handleOnChange = (event) =>{
        console.log("handle on change");
        setText(event.target.value);
    }
    // THIS IS USE STATE 
    const [text, setText] = useState("");

    // STYLE
    const myStyle ={
        backgroundColor: props.mode==="dark"?"grey":"white",
        color: props.mode==="dark"?"white":"black"
        
      }
    
  return (
    <>
   <div className="container my-4">
        <h2 className='mb-4' style={{color: props.mode==="dark"?"white":"black"}}>{props.heading}</h2>
        <textarea value={text} onChange={handleOnChange} style={myStyle} className="form-control" id="mybox" rows="4"></textarea>
        {/* 🧡🧡🧡 */}
        <button disabled={countWord()===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Conver to Uppercase</button>
        <button disabled={countWord()===0} className="btn btn-primary mx-2 my-2" onClick={handleULoClick}>Conver to Lowercase</button>
        <button disabled={countWord()===0} className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear</button>
        <button disabled={countWord()===0} className="btn btn-success mx-2 my-2" onClick={handleGreenTextClick}>Green Text</button>
        <button disabled={countWord()===0} className="btn btn-success mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
        <button disabled={countWord()===0} className="btn btn-success mx-2 my-2" onClick={handleRemoveExSpaceClick}>Remove Extra Spaces</button>
    </div>

    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>Text Summery</h2>
        <p>{countWord()} Words and {countCharacter()} Character </p>
        <p>{0.008*countWord()} Minutes to Read</p>

        <h2>Text Preview</h2>
        <p>{text.length>0?text+"😍":"Nothing to Preview 😪."}</p>
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
