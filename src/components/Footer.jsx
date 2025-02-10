const Footer = ({ isDarkMode }) => {
  const footerClass = isDarkMode ? 'footer dark' : 'footer light';

  return (
    <footer className={footerClass}>
      <p className="footer-text">© 2023 Mi Web. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
