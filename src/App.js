import React from "react";

import Portfolio from "./components/portfilio/Portfolio";
import Contact from "./components/contact/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Top from "./components/Top";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Top />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
