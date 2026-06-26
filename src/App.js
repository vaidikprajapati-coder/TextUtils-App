
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { useState } from 'react-dom';
import About from './components/about';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  

function App() {
   const [mode, setMode] = useState("light"); // whether dark mode is enable or not
   const toggleMode = () => {
// In your dark mode toggle logic, apply this style to body
if (mode === 'light') {
   setMode('dark');
  document.body.style.backgroundColor = '#0f172a';
  document.body.style.backgroundImage = `
    radial-gradient(at 20% 30%, #1e1b4b 0px, transparent 50%),
    radial-gradient(at 80% 10%, #042f2e 0px, transparent 50%),
    radial-gradient(at 50% 80%, #0c1445 0px, transparent 50%)
  `;
} else {
   setMode('light');
  document.body.style.backgroundColor = '#f0f4ff';
  document.body.style.backgroundImage = `
    radial-gradient(at 20% 30%, #dbeafe 0px, transparent 50%),
    radial-gradient(at 80% 10%, #ede9fe 0px, transparent 50%),
    radial-gradient(at 50% 80%, #dcfce7 0px, transparent 50%)
  `;
}
   }
  return (
    <>
 <Router>
 <Navbar title="TextUtils" aboutText="About Us" mode={mode}  toggleMode = {toggleMode}/>
 <div className="container">
  <switch>
    <Route exact path="/About">
    <About mode={mode}/>
    </Route>
    <Route exact path="/">
        <TextForm heading ="Enter the text to analyz" mode={mode}/>
    </Route>
  </switch>
 </div>
  
 </Router>
</>
  )
};

export default App;
