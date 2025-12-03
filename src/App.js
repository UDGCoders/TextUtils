import PropTypes from 'prop-types';
import './App.css';
import NavBar from './components/navbar';
import TextForm from './components/textForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2500);
  };

  const [mode, setMyMode] = useState("Dark Mode");

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const Mode = () => {
    if (myStyle.color === "black") {
      setMyStyle({ color: 'white' });
      setMyMode("Light Mode");
      document.body.style.color = "white";
      document.body.style.backgroundColor = '#00274c';
      showAlert("Dark mode has been triggered", "success");
    } else {
      setMyStyle({ color: 'black' });
      setMyMode("Dark Mode");
      document.body.style.color = "black";
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been triggered", "success");
    }
  };

  return (
    <Router>
      <NavBar
        title="TextUtils"
        about="About Us"
        mode={mode}
        Mode={Mode}
        myStyle={myStyle}
      />

      <div className="container gy-3">
        <Alert alert={alert} />
        <Routes>
          <Route
            exact path="/TextUtils"
            element={<TextForm heading="Enter Your text below" showAlert={showAlert} />}
          />
          <Route
            exact path="/"
            element={<TextForm heading="Enter Your text below" showAlert={showAlert} />}
          />
          <Route
           exact path="/about"
            element={<About mode={Mode}/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};
