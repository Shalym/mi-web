import React from "react";

const Services = () => {
    return (
        <section style={{ display: "flex", justifyContent: "center", gap: "30px", padding: "60px", background: "#111", color: "white" }}>
            <div style={{ padding: "30px", background: "#222", borderRadius: "10px", textAlign: "center", width: "25%", transition: "0.3s", cursor: "pointer" }}>
                🎤 <h3>Sonido Profesional</h3>
            </div>
            <div style={{ padding: "30px", background: "#222", borderRadius: "10px", textAlign: "center", width: "25%", transition: "0.3s", cursor: "pointer" }}>
                💡 <h3>Iluminación Espectacular</h3>
            </div>
            <div style={{ padding: "30px", background: "#222", borderRadius: "10px", textAlign: "center", width: "25%", transition: "0.3s", cursor: "pointer" }}>
                🎬 <h3>Producción Audiovisual</h3>
            </div>
        </section>
    );
};

export default Services;