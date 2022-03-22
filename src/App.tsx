import React from 'react';
import { Link, useRoutes } from 'react-router-dom';
import router from './router/config'
import './App.css';

function App() {
  const element = useRoutes(router)
  return (
    <div className="App">
      <div className="nar">
        <Link to="/home">home</Link>
        &nbsp;
        <Link to="/About">about</Link>
        &nbsp;
      </div>
      <div className="content">
      {element}
      </div>
    </div>
  );
}

export default App;
