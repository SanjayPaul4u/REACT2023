// import './App.css';
import { useState } from 'react';
import './App-edit.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {

  //🧡🧡🧡
  const [alert, setAlert] = useState(null);
  const showAlert = (type, msg)=>{
    setAlert({
      type:type,
      message: msg
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


//🧡🧡🧡
  const [mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#2d055ef0";
      showAlert("success", "Dark Mode has been enabled");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("warning", "Dark Mode has been disabled");

    }

  }
  return (
    <>      
      {/* <Navbar title = "TEXTUTILS" about = {45}/> */}
      <Navbar mode={mode} toggleMode={toggleMode}/>  
      <Alert alert={alert}/> 
      <TextForm mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
      
    </>
  );
}

export default App;
