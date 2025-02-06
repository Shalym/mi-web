const Footer = ({ isDarkMode }) => {
    return (
      <footer style={{
        background: isDarkMode ? "#333" : "#000",
        color: "#fff",
        padding: "20px",
        textAlign: "center"
      }}>
        <p style={{ margin: 0 }}>© 2023 Mi Web. Todos los derechos reservados.</p>
      </footer>
    );
  };
  
  export default Footer;