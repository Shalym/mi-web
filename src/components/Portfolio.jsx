const Portfolio = ({ isDarkMode }) => {
  const sectionClass = isDarkMode ? 'portfolio-section dark' : 'portfolio-section light';

  return (
    <section className={sectionClass}>
      <h2 className="portfolio-title">Portafolio</h2>
      <div className="portfolio-container">
        <div className="portfolio-card">
          <h3 className="portfolio-card-title">Concierto 1</h3>
          <p>Descripción del evento.</p>
        </div>
        <div className="portfolio-card">
          <h3 className="portfolio-card-title">Concierto 2</h3>
          <p>Descripción del evento.</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
