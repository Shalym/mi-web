const Contact = ({ isDarkMode }) => {
    return (
      <section style={{
        background: isDarkMode ? "#333" : "#f0f0f0",
        color: isDarkMode ? "#fff" : "#000",
        padding: "50px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Contacto</h2>
        <form style={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Nombre:</label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                background: isDarkMode ? "#555" : "#fff",
                color: isDarkMode ? "#fff" : "#000"
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
            <input
              type="email"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                background: isDarkMode ? "#555" : "#fff",
                color: isDarkMode ? "#fff" : "#000"
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Mensaje:</label>
            <textarea
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                background: isDarkMode ? "#555" : "#fff",
                color: isDarkMode ? "#fff" : "#000"
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: isDarkMode ? "#ff4500" : "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Enviar
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;