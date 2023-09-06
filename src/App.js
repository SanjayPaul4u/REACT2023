// import './App.css';
import './App-edit.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';


function App() {
  return (
    <>      
      {/* <Navbar title = "TEXTUTILS" about = {45}/> */}
      <Navbar/>      
      <TextForm/>
      <About/>
      
    </>
  );
}

export default App;
