import './App.css';
import React , {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router } from "react-router-dom";
import {
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {

    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)
  
    const showAlert =(message, type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  
    }
  
    const toggleMode =()=>{
      if (mode === "dark"){
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert('Dark Mode has been disabled', 'success')
        document.title = "TextUtils"
      }
      else{
        setMode('dark')
        document.body.style.backgroundColor='#1b222c'
        showAlert('Dark Mode has been enabled', 'success')
        document.title = "TextUtils - Dark"
      }
    }
  return (
    <>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    
    <Router>
    <Routes>
        <Route exact path="/" element={ <TextForm showAlert={showAlert} heading='Please Enter the Text: ' mode={mode}/> } />
        <Route exact path="about" element={ <About mode={mode}/> }  />
        {/* <Route path="contact" element={  } /> */}
      </Routes>
      </Router>

    </>
  );
}

export default App;
