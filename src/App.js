import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; // Import Navbar component
import { GlobalStyle } from "./styles/globalStyles"; 
const App = () => {
  return (   
    <BrowserRouter>
      <Navbar /> {/* Place Navbar here so it's consistent across routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer/> <GlobalStyle />
    </BrowserRouter>
  );
};


export default App; 