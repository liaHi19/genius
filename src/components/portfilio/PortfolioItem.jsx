import React from "react";

import PortfolioDescription from "./PortfolioDescription";
import PortfolioWork from "./PortfolioWork";

const PortfolioItem = ({ img, author, content, left }) => {
  return (
    <div className="portfolio__item">
      {left ? (
        <>
          <div className="portfolio__item-left">
            <PortfolioWork img={img} author={author} />
          </div>
          <div className="portfolio__item-right portfolio__item-right--left">
            <PortfolioDescription {...content} />
          </div>
        </>
      ) : (
        <>
          <div className="portfolio__item-right portfolio__item-right--right">
            <PortfolioDescription {...content} />
          </div>
          <div className="portfolio__item-left">
            <PortfolioWork img={img} author={author} />
          </div>
        </>
      )}
    </div>
  );
};

export default PortfolioItem;
