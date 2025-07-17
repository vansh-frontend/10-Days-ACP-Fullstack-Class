import React, { useState } from 'react';
import Info from './Info';
import API from './API';
import Counter from './Counter';
import './App.css';

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div classname="App">
      <Counter />
      <hr className="separator" />

  <div className="form-section">
    <h1>React Form</h1>
    <form>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          alert("Form submitted successfully!");
          setUsername("");
          setPassword("");
        }}
      >
        Submit
      </button>
    </form>
  </div>


      <Info username={username} password={password} />
  
  <hr className="separator" />
      <API/>
    </div>
  );
};

export default App;

