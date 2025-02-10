const HeroSection = ({ isDarkMode }) => {
  const sectionClass = isDarkMode ? 'hero-section dark' : 'hero-section light';
  const buttonClass = isDarkMode ? 'hero-button dark' : 'hero-button light';

  return (
    <section className={sectionClass}>
      <h1 className="hero-title">Llevamos la mejor experiencia a tu concierto!</h1>
      <button className={buttonClass}>
        Solicita presupuesto
      </button>
    </section>
  );
};

export default HeroSection;
