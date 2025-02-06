import React from 'react';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav style={{
      background: "rgba(0, 0, 0, 0.8)",
      color: "#fff",
      padding: "15px 20px",
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 1000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h1 style={{ margin: 0 }}>Mi Web</h1>
      <ul style={{
        display: "flex",
        listStyle: "none",
        gap: "30px",
        margin: 0,
        padding: 0
      }}>
        <li><a href="#" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Inicio</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Servicios</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Portafolio</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Contacto</a></li>
      </ul>
      <button onClick={toggleDarkMode} style={{
        padding: "10px",
        background: "#ff4500",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}>
        Modo {isDarkMode ? "Claro" : "Oscuro"}
      </button>
    </nav>
  );
};

export default Navbar;