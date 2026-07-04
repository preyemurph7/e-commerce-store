import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './App.css'

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>} />
             <Route path="/contact" element={<Contact/>} />
             </Route>      
        </Routes>
    </BrowserRouter> 
  );
}

export default App
 