// import './App.css';
import { useState } from 'react';
import './App-edit.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";



function App() {


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
 const removeBodyClasslist = ()=>{
  document.body.classList.remove("bg-warning")
  document.body.classList.remove("bg-danger")
  document.body.classList.remove("bg-success")
  document.body.classList.remove("bg-light")
 }


  const [mode, setMode] = useState("light");
  const toggleMode = (cls)=>{
    console.log(cls);

     //🧡🧡🧡
    removeBodyClasslist();
    // document.body.classList= "bg-"+cls;// here no need to remove body class
    document.body.classList.add("bg-"+cls);
    
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#2d055ef0";
      showAlert("success", "Dark Mode has been enabled");
      
      // document.title = "TextUtils - Dark mode"
      ////🧡🧡🧡
      /*setInterval(() => {
      document.title = "TextUtils amazing app"        
      }, 2000);

      setInterval(() => {
      document.title = "Install now"            
      }, 1500);*/
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("warning", "Dark Mode has been disabled");
      document.title = "TextUtils - Light mode"

    }

  }
  return (
    <>    
    <BrowserRouter>
    
      {/* <Navbar title = "TEXTUTILS" about = {45}/> */}
      <Navbar mode={mode} toggleMode={toggleMode}/>  
      <Alert alert={alert}/> 
          

      <Routes>
        <Route
        eaxt path='/'
        element={<TextForm heading="Try TextUtils - Word Counter, Char Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert}/>}
        />          
        <Route 
        eaxt path='/about' 
        element={<About mode={mode}/>}
        />
      </Routes>
      
    
    </BrowserRouter>  
    </>
  );
}

export default App;
