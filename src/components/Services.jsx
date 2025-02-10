const Services = ({ isDarkMode }) => {
  const sectionClass = isDarkMode ? 'services-section dark' : 'services-section light';

  return (
    <section className={sectionClass}>
      <h2 className="services-title">Nuestros Servicios</h2>
      <div className="services-container">
        <div className="service-card">
          <h3 className="service-title">Sondeo Profesional</h3>
          <p>Iluminación Espectacular</p>
          <p>Producción Audiovisual</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
