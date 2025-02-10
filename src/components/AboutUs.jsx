const AboutUs = ({ isDarkMode }) => {
  const aboutUsClass = isDarkMode ? 'about-us-section dark' : 'about-us-section light';

  return (
    <section className={aboutUsClass}>
      <h2 className="about-us-title">Sobre Nosotros</h2>
      <p className="about-us-description">
        Somos una empresa dedicada a ofrecer soluciones innovadoras para tus eventos. Con tecnología de punta y un equipo profesional, garantizamos la mejor experiencia.
      </p>
    </section>
  );
};

export default AboutUs;
