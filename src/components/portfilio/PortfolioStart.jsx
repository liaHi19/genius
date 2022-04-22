import React from "react";

const PortfolioStart = ({ title, content }) => {
  return (
    <>
      <h2 className="portfolio__title">{title}</h2>
      <div className="portfolio__content">
        {content.map((text) => (
          <p className="portfolio__text" key={text.id}>
            {text.text}
          </p>
        ))}
      </div>
    </>
  );
};

export default PortfolioStart;
