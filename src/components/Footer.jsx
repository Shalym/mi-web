const Footer = ({ isDarkMode }) => {
    return (
      <footer style={{
        background: isDarkMode ? "#1a1a1a" : "#000000",
        color: "#ffffff",
        padding: "20px",
        textAlign: "center"
      }}>
        <p style={{ margin: 0 }}>© 2023 Mi Web. Todos los derechos reservados.</p>
      </footer>
    );
  };
  
  export default Footer;