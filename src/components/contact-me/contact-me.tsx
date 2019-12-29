import React from "react";

import "./contact-me.scss";

const cls = "contact-me";

const ContactMe: React.FC = () => (
  <section className={cls}>
    <h2>Get in touch</h2>
    <p className={cls + "__text"}>
      I am currently based in Hamburg, and also available for remote work.
      Feel free to send me an email or a WhatsApp message.
    </p>
    <address className={cls + "__contact"}>
      <span>mathilde.buenerd@gmail.com</span>
      <span className={cls + "__phone"}>
        <span className={cls + "__phone-number"}>+33</span>
        <span className={cls + "__phone-number"}>6</span>
        <span className={cls + "__phone-number"}>35</span>
        <span className={cls + "__phone-number"}>52</span>
        <span className={cls + "__phone-number"}>76</span>
        <span className={cls + "__phone-number"}>84</span>
      </span>
    </address>
  </section>
);

export default ContactMe;
