import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router} from 'react-router-dom';
import { NavBar }    from './components/NavBar';
import Home          from './pages/Home';
import Resume    from './pages/Resume';

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