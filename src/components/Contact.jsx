const Contact = ({ isDarkMode }) => {
  const contactClass = isDarkMode ? 'contact-section dark' : 'contact-section light';

  return (
    <section className={contactClass}>
      <h2 className="contact-title">Contacto</h2>
      <form className="contact-form">
        <div className="contact-field">
          <label className="contact-label">Nombre:</label>
          <input type="text" className="contact-input" />
        </div>
        <div className="contact-field">
          <label className="contact-label">Email:</label>
          <input type="email" className="contact-input" />
        </div>
        <div className="contact-field">
          <label className="contact-label">Mensaje:</label>
          <textarea className="contact-textarea" />
        </div>
        <button type="submit" className="contact-button">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
