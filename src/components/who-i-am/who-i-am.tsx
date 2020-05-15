import React from "react";

import mainIllustration from "./illustrations/main-illustration.png";
import "./who-i-am.scss";

const cls = "who-i-am";

const WhoIAm: React.FC = () => (
  <section className={cls}>
    <div className={cls + "__content"}>
      <span className={cls + "__hello"}>Bonjour! :)</span>
      <div className={cls + "__block-title"}>
        <span className={cls + "__i-am"}>I am</span>
        <span className={cls + "__name"}>Mathilde</span>
        <h1 className={cls + "__title"}>
          <span className={cls + "__job"}>Front-end developer</span>
        </h1>
      </div>
      <p className={cls + "__introduction"}>
        With a strong UI/UX background, I am proficient with building
        user-friendly interfaces whilst maintaining semantic, clean markup and
        SEO friendly code.
      </p>
    </div>
    <div className={cls + "__illustration"}>
      <img src={mainIllustration} alt="" />
    </div>
  </section>
);

export default WhoIAm;
