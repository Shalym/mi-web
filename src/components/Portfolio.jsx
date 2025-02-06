const Portfolio = ({ isDarkMode }) => {
    return (
        <section style={{
            background: isDarkMode ? "#444" : "#e0e0e0",
            color: isDarkMode ? "#fff" : "#000",
            padding: "50px 20px",
            textAlign: "center"
        }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Portafolio</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <div style={{ background: isDarkMode ? "#555" : "#fff", padding: "20px", borderRadius: "10px", width: "200px" }}>
                    <h3>Proyecto 1</h3>
                    <p>Descripción del proyecto 1.</p>
                </div>
                <div style={{ background: isDarkMode ? "#555" : "#fff", padding: "20px", borderRadius: "10px", width: "200px" }}>
                    <h3>Proyecto 2</h3>
                    <p>Descripción del proyecto 2.</p>
                </div>
                <div style={{ background: isDarkMode ? "#555" : "#fff", padding: "20px", borderRadius: "10px", width: "200px" }}>
                    <h3>Proyecto 3</h3>
                    <p>Descripción del proyecto 3.</p>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;