
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';

function App() {
  const [mode,setMode] = useState("light")

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#020231"
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <div className="App">
      <Navbar mode = {mode} toggleMode ={toggleMode}/>
      <Textbox mode = {mode}/>
    </div>
  );
}

export default App;
