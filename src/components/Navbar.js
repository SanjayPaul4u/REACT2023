import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
           <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">{props.about}</Link>
              </li>
            </ul>
            {/* Multiple mode button */}
            <div style={{display: 'flex'}}>
              <div onClick={()=>{props.toggleMode("success")}} className="bg-success rounded mx-2" style={{height: "2rem", width: "2rem"}}></div>
              <div onClick={()=>{props.toggleMode("danger")}} className="bg-danger rounded mx-2" style={{height: "2rem", width: "2rem"}}></div>
              <div onClick={()=>{props.toggleMode("warning")}} className="bg-warning rounded mx-2" style={{height: "2rem", width: "2rem"}}></div>
            </div>


            <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`}>
            <input onClick={()=>{props.toggleMode(null)}} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes ={
  title:PropTypes.string,
  about: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "Set title here",
  about: "About"
}