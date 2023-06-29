//import { useState } from 'react'




import React from 'react'
import Home from './components/Home'
//import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
  // routing
  <Router>

<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/contact" element={<Contact/>}/>
</Routes>
    </Router>
    
    
  )
};

export default App;
