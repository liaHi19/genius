import React from "react";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <article className="contact">
      <div className="container">
        <div className="contact__inner">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </article>
  );
};

export default Contact;
