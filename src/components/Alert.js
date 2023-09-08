import React from 'react'

function Alert(props) {
    const capitalizedFunc = (word)=>{
        const lowercaseStr = word.toLowerCase();
        return lowercaseStr.charAt(0).toUpperCase()+lowercaseStr.slice(1);
    }
    const myStyle = {
        height : "3rem",
        width: "100%"
    }

  return (
    <div className="alert-div" style={myStyle}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" data-bs-delay="1000">
            <strong>{capitalizedFunc(props.alert.type)}</strong>: {props.alert.message}   
            </div>}
    </div>
    
  )
}

export default Alert