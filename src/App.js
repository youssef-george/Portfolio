import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer"; // استيراد مكون التذييل


import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills /> {/* إضافة الـ component Skills هنا */}
      <Contact />
      <Footer /> {/* إضافة مكون التذييل هنا */}
    </div>
  );
}

export default App;
