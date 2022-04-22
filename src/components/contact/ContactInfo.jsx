import React from "react";

import { PhoneSvg, LocationSvg, MailSvg } from "../elements/svg";

const ContactInfo = () => {
  return (
    <ul className="contact__info">
      <li className="contact__info-item">
        <span className="contact__info-link">
          <LocationSvg />
          <span>Poststr, 45, 44890 Hamburg</span>
        </span>
      </li>
      <li className="contact__info-item">
        <a className="contact__info-link" href="mailto:hello@tradata.de">
          <MailSvg />
          <span>hello@tradata.de</span>
        </a>
      </li>
      <li className="contact__info-item">
        <a className="contact__info-link" href="tel:+490403803344">
          <PhoneSvg />
          <span>040 380-33- 44</span>
        </a>
      </li>
    </ul>
  );
};

export default ContactInfo;
