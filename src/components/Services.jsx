const Services = ({ isDarkMode }) => {
    return (
      <section style={{
        background: isDarkMode ? "#2a2a2a" : "#e0e0e0",
        color: isDarkMode ? "#ffffff" : "#000000",
        padding: "50px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: isDarkMode ? "#ff4500" : "#007bff" }}>
          Nuestros Servicios
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <div style={{ 
            background: isDarkMode ? "#333333" : "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            color: isDarkMode ? "#ffffff" : "#000000"
          }}>
            <h3 style={{ color: isDarkMode ? "#ff4500" : "#007bff" }}>Sondeo Profesional</h3>
            <p>Iluminación Espectacular</p>
            <p>Producción Audiovisual</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;