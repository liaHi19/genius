import React from "react";

import { portfolio } from "../../data/portfolio";

import PortfolioItems from "./PortfolioItems";
import PortfolioStart from "./PortfolioStart";

const Portfolio = () => {
  const { title, content, items } = portfolio;

  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__start">
          <PortfolioStart title={title} content={content} />
        </div>
        <PortfolioItems items={items} />
      </div>
    </section>
  );
};

export default Portfolio;
