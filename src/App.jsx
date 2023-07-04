//import { useState } from 'react'




import React from 'react'
import Home from './components/Home'
//import Footer from './components/Footer'
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import Login from './components/Login';
import Events from './components/Events';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
  // routing
  <Router>

<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/events" element={<Events/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path='/login' element={<Login/>}/>


</Routes>
    </Router>
    
    
  )
};

export default App;
