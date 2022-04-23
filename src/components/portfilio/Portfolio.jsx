import React from "react";

import { portfolio } from "../../data/portfolio";
import { ChatSvg } from "../elements/svg";

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
      <div className="portfolio__chat">
        <ChatSvg />
      </div>
    </section>
  );
};

export default Portfolio;
