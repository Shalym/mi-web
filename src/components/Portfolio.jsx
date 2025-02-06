import React from "react";

const Porfolio = () => {
    return (
        <section style={{ padding: "60px", background: "#111", color: "white", textAlign: "center" }}>
            <h2>Nuestro Portafolio</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <img src="/assets/event1.jpg" alt="Evento 1" style={{ width: "30%", borderRadius: "10px" }} />
                <img src="/assets/event2.jpg" alt="Evento 2" style={{ width: "30%", borderRadius: "10px" }} />
                <img src="/assets/event3.jpg" alt="Evento 3" style={{ width: "30%", borderRadius: "10px" }} />
            </div>
        </section>
    );
};

export default Porfolio;