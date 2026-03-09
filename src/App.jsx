import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Introduction from "./Introduction.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Connect from "./Connect.jsx";
import Footer from "./Footer.jsx";

function App() {
  

  return (
    <>
    <Navbar />
    <Introduction />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Connect />
    <Footer />
    </>
  );
}

export default App;
