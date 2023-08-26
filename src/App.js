// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light'); //whether dark mode is enabled or not
 const [alert,setAlert]=useState(null);

 const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
 }
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='aquamarine';
      showAlert("Light mode has been enabled", "success");
      document.title="TextUtils - Light Mode";
      
    }
  }
  // yellow mode
  // const toggleModeYellow=()=>{
  //   if(mode ==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor ='yellow';
  //     showAlert("Yellow mode has been enabled", "success");
  //     document.title="TextUtils - Yellow Mode";
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor ='aquamarine';
  //     showAlert("Light mode has been enabled", "success");
  //     document.title="TextUtils - Light Mode";
      
  //   }
  // }
  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
  {/* <Switch> */}
    {/* <Route exact path="/about"> */}
      {/* <About/> */}
    {/* </Route> */}
    {/* <Route exact path="/"> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analysis....." mode={mode}/>
    {/* </Route> */}
  {/* </Switch> */}
</div>
  {/* </Router> */}
{/* <About /> */}


  </>
  );
}

export default App;