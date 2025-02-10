import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div>
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} isDarkMode={darkMode} />
      <HeroSection isDarkMode={darkMode} />
      <Services isDarkMode={darkMode} />
      <AboutUs isDarkMode={darkMode} />
      <Portfolio isDarkMode={darkMode} />
      <Contact isDarkMode={darkMode} />
      <Footer isDarkMode={darkMode} />
    </div>
  );
}

export default App;