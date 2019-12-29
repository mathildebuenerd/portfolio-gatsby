import React from "react";
import Skill from "src/components/skill/skill";

import "./what-i-do.scss";

const cls = "what-i-do";

const WhatIDo: React.FC = () => (
  <section className={cls}>
    <h2>What I do</h2>
    <p className={cls + "__introduction"}>
      <strong>Single Page Applications</strong> are great for (JavaScript) developers.
      They provide amazing tools to create scalable and maintainable web apps.
      But they do very bad for things standard HTML used to give us for free, such as accessibility
      and SEO. As a former designer with a <strong>deep knowledge of usability</strong>,
      my focus is first of all on <strong>quality</strong>.</p>
    <Skill
      label="Front-end development"
      description="I develop modern web apps with JavaScript, TypeScript or React.js."
    />
    <Skill
      label="Accessibility & Usability"
      description="Make sure you respect the web standards and WCAG guidelines for apps accessible to everyone."
    />
    <Skill
      label="SEO"
      description="SEO-friendly Single Page Application is possible."
    />
  </section>
);

export default WhatIDo;
