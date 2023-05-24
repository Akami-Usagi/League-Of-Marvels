import './App.css';
import React from 'react';
import Main from './Pages/main';
import Header from './Components/Header';
import Home from './Pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [seriesGoal, setSeriesGoal] = useState(500)

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Main seriesGoal={seriesGoal}/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
