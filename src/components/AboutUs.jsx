const AboutUs = ({ isDarkMode }) => {
    return (
      <section style={{
        background: isDarkMode ? "#1a1a1a" : "#f0f0f0",
        color: isDarkMode ? "#ffffff" : "#000000",
        padding: "50px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: isDarkMode ? "#ff4500" : "#007bff" }}>
          Sobre Nosotros
        </h2>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
          Somos una empresa dedicada a ofrecer soluciones innovadoras para tus eventos. Con tecnología de punta y un equipo profesional, garantizamos la mejor experiencia.
        </p>
      </section>
    );
  };
  
  export default AboutUs;