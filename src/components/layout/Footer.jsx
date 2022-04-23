import React from "react";

const Footer = () => {
  const years = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__info">
          {" "}
          &copy; {years} Genius Web Agentur. Alle Rechte vorbehalten
        </p>
      </div>
    </footer>
  );
};

export default Footer;
