const Contact = () => {
    return (
        <section style={{ padding: "60px", background: "#222", color: "white", textAlign: "center" }}>
            <h2>Contacto</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px", margin: "auto" }}>
                <input type="text" placeholder="Nombre" style={{ padding: "10px", borderRadius: "5px" }} />
                <input type="email" placeholder="Correo" style={{ padding: "10px", borderRadius: "5px" }} />
                <textarea placeholder="Mensaje" style={{ padding: "10px", borderRadius: "5px", height: "100px" }}></textarea>
                <button style={{ background: "#ff4500", color: "white", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>Enviar</button>
            </form>
        </section>
    );
};

export default Contact;