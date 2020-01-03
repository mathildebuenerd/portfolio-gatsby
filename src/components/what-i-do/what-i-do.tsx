import React from "react";

import "./what-i-do.scss";

const cls = "what-i-do";

const WhatIDo: React.FC = () => (
  <section className={cls}>
    <header className={cls + "__header"}>
      <h2 className={cls + "__title"}>I do Front-end.</h2>
      <span className={cls + "not-js"}>(not JavaScript development)</span>
    </header>
    <p className={cls + "__introduction"}>
      <strong>Single Page Applications</strong> are great for (JavaScript) developers.
      They provide amazing tools to create scalable and maintainable web apps.
      But they do very bad for things standard HTML used to give us for free, such as accessibility
      and SEO. As a former designer with a <strong>deep knowledge of usability</strong>,
      my focus is first of all on <strong>quality</strong>.
    </p>
  </section>
);

export default WhatIDo;
