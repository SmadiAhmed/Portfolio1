import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Aboutme from './components/Aboutme';
import Navbar from "./components/Navbar"
import Projects from './components/Projects';
import image from "./assets/background.png"

function App() {
  return (
    
    <Router> 
       <div className='h-screen bg-cover bg-center bg-no-repeat flex flex-col' style={{backgroundImage: `url(${image})`}}>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<Aboutme />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </div>
  </Router>
    
  );
}

export default App;
