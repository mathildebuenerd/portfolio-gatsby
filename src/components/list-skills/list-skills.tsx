import React from "react";
import Skill from "src/components/list-skills/skill/skill";

import "./list-skills.scss";

const cls = "list-skills";

const ListSkills: React.FC = () => {
  return (
    <section className={cls}>
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
};

export default ListSkills;

