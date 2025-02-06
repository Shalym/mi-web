import React from "react";

const Footer = () => {
    return (
        <footer style={{ background: "#000", color: "white", textAlign: "center", padding: "30px" }}>
            <p>&copy; 2025 Producción de Conciertos. Todos los derechos reservados.</p>
            <p>Contacto: info@produccionconciertos.com</p>
            <div>
                <a href="#" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Facebook</a>
                <a href="#" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Instagram</a>
                <a href="#" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Twitter</a>
            </div>
        </footer>
    );
};

export default Footer;