const HeroSection = ({ isDarkMode }) => {
    return (
      <section style={{
        background: isDarkMode ? "#1a1a1a" : "#f0f0f0",
        color: isDarkMode ? "#ffffff" : "#000000",
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: isDarkMode ? "#ff4500" : "#007bff" }}>
          Llevamos la mejor experiencia a tu concierto!
        </h1>
        <button style={{
          padding: "10px 20px",
          background: isDarkMode ? "#ff4500" : "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1.2rem"
        }}>
          Solicita presupuesto
        </button>
      </section>
    );
  };
  
  export default HeroSection;