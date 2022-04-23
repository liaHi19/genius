import React from "react";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import NavMenu from "../layout/NavMenu";

const Contact = () => {
  return (
    <article className="contact">
      <div className="container">
        <div className="contact__inner">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <div className="contact__header">
        <NavMenu />
      </div>
    </article>
  );
};

export default Contact;
