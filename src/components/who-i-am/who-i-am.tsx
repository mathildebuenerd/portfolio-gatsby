import React from "react";

import ButtonHire from "src/components/button-hire/button-hire";

import mainIllustration from "./illustrations/main-illustration.png";
import "./who-i-am.scss";

const cls = "who-i-am";

const WhoIAm: React.FC = () => (
  <section className={cls}>
    <div className={cls + "__content"}>
      <h1 className={cls + "__title"}>
        <span className={cls + "__job"}>Front-end developer</span>
      </h1>
      <p>
        Hi! My name is <em>Mathilde Buenerd</em>.
      </p>
      <p className={cls + "__introduction"}>
        With a strong <strong>UI/UX</strong> background, I am proficient with
        building
        <strong> user-friendly interfaces</strong> whilst maintaining{" "}
        <strong>semantic</strong>, clean markup and
        <strong> SEO-friendly</strong> code.
      </p>
      <ButtonHire />
    </div>
    <div className={cls + "__illustration"}>
      <img src={mainIllustration} alt="" />
    </div>
  </section>
);

export default WhoIAm;
