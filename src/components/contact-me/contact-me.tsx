import React from "react";
import Technology from "src/components/technology/technology";

import "./contact-me.scss";

const cls = "contact-me";

const ContactMe: React.FC = () => (
  <section className={cls} id="contact">
    <h2 className={cls + "__title"}>Get in touch</h2>
    <p className={cls + "__text"}>
      I am currently based in Hamburg, and also available for remote work. Feel
      free to send me an email or a WhatsApp message.
    </p>
    <address className={cls + "__contact"}>
      <Technology
        type="fas"
        icon="envelope"
        label="mathilde.buenerd[at]gmail.com"
      />
    </address>
    <a href="https://github.com/mathildebuenerd">
      <Technology type="fab" icon="github" label="Github" />
    </a>
    <a href="https://www.linkedin.com/in/mathilde-buenerd/">
      <Technology type="fab" icon="linkedin" label="LinkedIn" />
    </a>
    <a href="https://twitter.com/mathildebuenerd">
      <Technology type="fab" icon="twitter" label="Twitter" />
    </a>
  </section>
);

export default ContactMe;
