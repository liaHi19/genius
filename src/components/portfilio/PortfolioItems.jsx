import React from "react";

import PortfolioItem from "./PortfolioItem";

const PortfolioItems = ({ items }) => {
  return (
    <ul className="portfolio__items">
      {items.map((item) => (
        <li key={item.id}>
          <PortfolioItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default PortfolioItems;
