const HeroSection = ({ isDarkMode }) => {
    return (
      <section style={{
        background: isDarkMode ? "#333" : "#f0f0f0",
        color: isDarkMode ? "#fff" : "#000",
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Bienvenido a Mi Web</h1>
        <p style={{ fontSize: "1.2rem" }}>Esta es una sección de héroe.</p>
      </section>
    );
  };
  
  export default HeroSection;