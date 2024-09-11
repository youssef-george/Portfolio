import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from './components/Skills';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills /> {/* إضافة الـ component Skills هنا */}
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
