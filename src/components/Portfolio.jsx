const Portfolio = ({ isDarkMode }) => {
    return (
      <section style={{
        background: isDarkMode ? "#2a2a2a" : "#e0e0e0",
        color: isDarkMode ? "#ffffff" : "#000000",
        padding: "50px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: isDarkMode ? "#ff4500" : "#007bff" }}>
          Portafolio
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <div style={{ 
            background: isDarkMode ? "#333333" : "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            color: isDarkMode ? "#ffffff" : "#000000"
          }}>
            <h3 style={{ color: isDarkMode ? "#ff4500" : "#007bff" }}>Concierto 1</h3>
            <p>Descripción del evento.</p>
          </div>
          <div style={{ 
            background: isDarkMode ? "#333333" : "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            color: isDarkMode ? "#ffffff" : "#000000"
          }}>
            <h3 style={{ color: isDarkMode ? "#ff4500" : "#007bff" }}>Concierto 2</h3>
            <p>Descripción del evento.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;