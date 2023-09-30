import { useState } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './screens/login';
import End from './screens/End';
import Mainpage from './screens/Mainpage';
import { Quizscreen } from './screens/Quizscreen';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Mainscreen" element={<Mainpage />} />
        <Route path="/quizscreen" element={<Quizscreen />} />
        {/* <Route path="/end"element={<End/>}/> */}
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Login/> */}
    </>)
}
export default App
