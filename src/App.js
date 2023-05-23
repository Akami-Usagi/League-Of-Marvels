import './App.css';
import React from 'react';
import Main from './Pages/main';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </Router>
  );
}

export default App;
