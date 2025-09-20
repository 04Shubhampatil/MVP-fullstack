import React from "react";
import Navbar from "./Share/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Topics from "./components/Topics";
import LogIn from "./auth/LogIn";
import SignUp from "./auth/SignUp";
import Questions from "./components/Questions";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/questions/:topic" element={<Questions />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
