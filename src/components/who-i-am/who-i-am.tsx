import React from "react";
import "./who-i-am.scss";

const cls = "who-i-am";

const WhoIAm: React.FC = () => (
  <section className={cls}>
    <span className={cls + "__hello"}>Bonjour! :)</span>
    <h1>
      <span className={cls + "__name"}>I am Mathilde Buenerd</span>
      <span className={cls + "__job"}>Freelance Front-end developer</span>
    </h1>
    <p>
      Coming from a design background, I am proficient with building user-friendly
      interfaces whilst maintaining semantic, clean markup and SEO friendly code.
    </p>
  </section>
);

export default WhoIAm;