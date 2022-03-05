import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './Components/Header/Header';
// import Main from './Components/Main/Main';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/login' element = {<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
