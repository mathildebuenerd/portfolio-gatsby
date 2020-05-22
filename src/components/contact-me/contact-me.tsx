import React from "react";
import Technology from "src/components/technology/technology";

import "./contact-me.scss";
import {
  FaArrowCircleRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const cls = "contact-me";

const ContactMe: React.FC = () => (
  <section className={cls} id="contact">
    <h2 className={cls + "__title"}>
      <span className={cls + "__icon"}>
        <FaArrowCircleRight />
      </span>{" "}
      Get in touch
    </h2>
    <p>I am currently based in Hamburg, and also available for remote work.</p>
    <p>Feel free to send me an email or a WhatsApp message.</p>
    <address className={cls + "__contact"}>
      <Technology icon={<FaEnvelope />} label="mathilde.buenerd[at]gmail.com" />
    </address>
    <a href="https://github.com/mathildebuenerd">
      <Technology icon={<FaGithub />} label="Github" />
    </a>
    <a href="https://www.linkedin.com/in/mathilde-buenerd/">
      <Technology icon={<FaLinkedin />} label="LinkedIn" />
    </a>
    <a href="https://twitter.com/mathildebuenerd">
      <Technology icon={<FaTwitter />} label="Twitter" />
    </a>
  </section>
);

export default ContactMe;
