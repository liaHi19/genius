import React from "react";

const PortfolioWork = ({ img, author }) => {
  return (
    <>
      <img className="portfolio__item-img" src={img} alt={author} />
      <span className="portfolio__item-author">{author}</span>
    </>
  );
};

export default PortfolioWork;
