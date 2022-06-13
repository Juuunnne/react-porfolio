import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
//Components
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/navbar/Sidebar";
//Pages
import AboutMe from "./pages/AboutMe";

function App() {
  //States
  const [isOpen, setIsOpen] = useState(false);
  //utility function
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route exact path="/project" element="" />
          <Route exact path="/project/:id" element="" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
