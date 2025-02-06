const AboutUs = ({ isDarkMode }) => {
    return (
        <section style={{
            background: isDarkMode ? "#333" : "#f0f0f0",
            color: isDarkMode ? "#fff" : "#000",
            padding: "50px 20px",
            textAlign: "center"
        }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Sobre Nosotros</h2>
            <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
                Somos una empresa dedicada a ofrecer soluciones innovadoras para nuestros clientes. Con años de experiencia en el mercado, nos destacamos por nuestra calidad y compromiso.
            </p>
        </section>
    );
};

export default AboutUs;