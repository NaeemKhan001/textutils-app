import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#122c52'
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white'
      showAlert('Light mode has been enabled', 'success');
    }
  }
  return (
    <>
     {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about={'About'}/>
      <Alert alert={alert}/>

      <div className="container my-3">
      {/* <Routes> */}
      <TextForm showAlert={showAlert} heading="Enter the text to convert to Uppercase or Lowercase" mode={mode}/>
        {/* <Route path="/" element={
          } /> */}
           {/* <Route path="/about" element={<About />} /> */}
      {/* </Routes> */}
      </div>
     {/* </Router> */}
    </>
  );
}


export default App;