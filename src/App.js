import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./pages/Introduction/Introduction";
import Description from "./pages/Description/Description";
import Projects from "./pages/Projects/Projects";
import Blog from "./pages/Blog/Blog";
import Skills from "./pages/Skills/Skills";
import Socials from "./pages/Socials/Socials";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Introduction />
        <Description />
        <Projects />
        <Blog />
        <Skills />
        <Socials />
        <Experience />
        <Contact />
      </Router>
    </>
  );
}

export default App;
