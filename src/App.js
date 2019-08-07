import React from 'react';
import './App.css'
import Login from './components/Login/Login.js'

// TODO - When login logic complete, replace hardcoded checks
const isLoggedIn = () => {
    return false
}

const App = () => {

  return (
    <div className="App">
      { !isLoggedIn() &&
        <Login />
      }
      { isLoggedIn() &&
        <div>
          {/*TODO - Replace with other component*/}
        </div>
      }
    </div>
  );
}

export default App;
