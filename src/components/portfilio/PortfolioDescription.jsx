import React from "react";

const PortfolioDescription = ({ title, description }) => {
  return (
    <div className="portfolio__item-content">
      <h4 className="portfolio__item-title">{title}</h4>
      <div className="portfolio__item-desc">
        {description.map((text) => (
          <p key={text.id}>{text.text}</p>
        ))}
      </div>
    </div>
  );
};

export default PortfolioDescription;
