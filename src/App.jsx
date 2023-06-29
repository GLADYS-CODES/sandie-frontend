//import { useState } from 'react'




import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
  // routing
  <Router>

<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>

</Routes>
    </Router>
    
    
  )
};

export default App;
