import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import TextForm from './component/TextForm'
import React, { useState } from 'react'
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#00002c";
      showAlert("Dark mode has been enabled", "success")

    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode has been enabled", "success")

    }
  }


  return (
    <Router>
      <div className="App">
        <Navbar title="Text Utils" mode={mode} toggleMode={toogleMode} />
        <Alert alert={alert} mode={mode} />
        <Switch>
          <Route exact path="/about">
            <About  mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
