import React from 'react';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <h1 className="navbar-title">Mi Web</h1>
      <ul className="navbar-links">
        <li><a href="#" className="navbar-link">Inicio</a></li>
        <li><a href="#" className="navbar-link">Servicios</a></li>
        <li><a href="#" className="navbar-link">Portafolio</a></li>
        <li><a href="#" className="navbar-link">Contacto</a></li>
      </ul>
      <button onClick={toggleDarkMode} className="dark-mode-button">
        Modo {isDarkMode ? "Claro" : "Oscuro"}
      </button>
    </nav>
  );
};

export default Navbar;
