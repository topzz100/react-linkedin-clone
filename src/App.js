import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './Components/Header/Header';
// import Main from './Components/Main/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { useSelector } from 'react-redux'
import { selectUser } from './features/user/userSlice';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {user? <Home/> : <Login/>}/>
        <Route path = '/login' element = {<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
