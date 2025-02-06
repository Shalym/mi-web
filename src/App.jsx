import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Porfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode); // Aplicar clase al body
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar toggleDarkMode={toggleTheme} isDarkMode={darkMode} />
      <HeroSection isDarkMode={darkMode} />
      <Services isDarkMode={darkMode} />
      <AboutUs isDarkMode={darkMode} />
      <Porfolio isDarkMode={darkMode} />
      <Contact isDarkMode={darkMode} />
      <Footer isDarkMode={darkMode} />
    </div>
  );
}

export default App;