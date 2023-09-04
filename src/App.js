// import './App.css';
import './App-edit.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';


function App() {
  return (
    <>      
      {/* <Navbar title = "TEXTUTILS" about = {45}/> */}
      <Navbar/>
      <div className="container">
         <TextForm/>
      </div>
    </>
  );
}

export default App;
