// import './App.css';
import { useState } from 'react';
import './App-edit.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';



function App() {

  //🧡🧡🧡
  const [mode, setMode] = useState("light");
  //🧡🧡🧡
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";

    }

  }
  return (
    <>      
      {/* <Navbar title = "TEXTUTILS" about = {45}/> */}
      <Navbar mode={mode} toggleMode={toggleMode}/>      
      <TextForm mode={mode}/>
      {/* <About/> */}
      
    </>
  );
}

export default App;
