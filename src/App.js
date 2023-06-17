import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const alertFunc = (message, type)=> {
    setAlert(
      {
        message: message,
        type: type
      }
    )
    
    setTimeout(()=>{
      setAlert(null)
    }, 2000)
  }

  function changeBackgroundMode() {
    console.log("clicked")
    if(mode==="light") {
      document.body.style.backgroundColor='black'
      setMode("dark")
    } else {
      document.body.style.backgroundColor='white'
      setMode("light")
    }
  }
  

  return (
    <div>
        <Navbar click={changeBackgroundMode} mode={mode}/>
        <Alert msg={alert}/>
        <TextForm title="Enter the text to analyze below" mode={mode} alert={alertFunc}/>
    </div>
  );
}

export default App;
