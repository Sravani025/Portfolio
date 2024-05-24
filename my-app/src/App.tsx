import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
