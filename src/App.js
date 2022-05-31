import './App.css';
import Navbar from './Components/Navbar';
 import Text from './Components/Text';
 //import About from './Components/About';
 import React, { useState } from 'react'
import Alert from './Components/Alert';
//import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

// let a=44;
// let b=77;
// let c=a+b;
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  const toggleMode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title='Text Utils- Blue Dark Mode'
      showAlert("Blue Dark mode has been enabled", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title='Text Utils- Light Mode'
      showAlert("Light mode has been enabled", "success");
    }
  }
  const greentoggleMode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'green';
      document.title='Text Utils- Green Dark Mode'
      showAlert("Green Dark mode has been enabled", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title='Text Utils- Light Mode'
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
     <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} greentoggleMode={greentoggleMode}/>
  <Alert alert={alert}/>
  <Text showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    {/* <Router>
      <Routes>
  <Route exact path= "/about" element={ <About/> }>
</Route>
  <Route exact path="/" element={<Text showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}>
</Route>
</Routes>
  </Router> */}
  {/* <div className="container my-3">
    <About/>
  </div> */}
   {/* <div className="container">
  <Text showAlert={showAlert} headop="Enter text to Analyze" mode={mode}/>
  </div>  */}
     {/* <h1 className="name">Moodle</h1> 
     <nav className="n">
      <li className="na">oregano</li>
      <li className="na1">oregano2</li>
      <li className="na2">oregano3</li>
      </nav>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic reiciendis tempore neque facilis. Laborum repudiandae eaque sapiente eligendi, fuga dolore, beatae tempore minus vero ea repellat impedit quidem numquam.
        ths is {a} and {c}
      </p> */}
    </>
  );
}

export default App;
