import React from "react";

const HeroSection = () => {
    return (
        <section style={{ textAlign: "center", padding: "150px 50px", background: "linear-gradient(to right, #000, #222)", color: "white" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>¡Llevamos la mejor experiencia a tu concierto!</h1>
            <button style={{ background: "#ff4500", color: "white", border: "none", padding: "15px 30px", cursor: "pointer", fontSize: "1.2rem", borderRadius: "5px" }}>Solicita presupuesto</button>
        </section>
    );
};

export default HeroSection;