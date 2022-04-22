import React from "react";

import Header from "./components/layout/Header";
import Top from "./components/Top";
import Portfolio from "./components/portfilio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Top />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
