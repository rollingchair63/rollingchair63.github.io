import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;