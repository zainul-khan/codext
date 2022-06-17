import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Policy from "./Components/Policy";
import Error from "./Components/Error";
import Nav from "./Components/Nav";
import Footer from './Components/Footer';

const App = ()=>{
  return(
    <>
  <Nav/>
  <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/policy" element={<Policy />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
  <Footer/>
  </>
  )
}

export default App;
