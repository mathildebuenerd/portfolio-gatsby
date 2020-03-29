import React from "react";

// components
import Skill from "src/components/list-skills/skill/skill";
import Technology from "src/components/technology/technology";

// helpers
import accessibility from "./svg/accessibility.svg";
import accessibility2 from "./svg/accessibility-2.svg";
import "./list-skills.scss";

const cls = "list-skills";

const ListSkills: React.FC = () => {
  const frontEndTechnologies = (): JSX.Element => (
    <>
      <Technology icon="react" label="React" type="fab" />
      <Technology icon="typescript" label="TypeScript" type="fab" />
      <Technology icon="js-square" label="JavaScript" type="fab" />
      <Technology icon="sass" label="Sass" type="fab" />
    </>
  );
  const disabilities = (): JSX.Element => (
    <>
      <Technology icon="universal-access" label="Universal access" type="fas" />
      <Technology icon="low-vision" label="Low vision" type="fas" />
      <Technology icon="accessible-icon" label="Physical disability" type="fab" />
    </>
  );
  return (
    <section className={cls}>
      <Skill
        label="Front-end development"
        description="I develop modern web apps with JavaScript, TypeScript or React.js."
        imageSrc={accessibility}
        customContent={frontEndTechnologies}
      />
      <Skill
        label="Accessibility & Usability"
        description="Make sure you respect the web standards and WCAG guidelines for apps accessible to everyone."
        imageSrc={accessibility2}
        customContent={disabilities}
      />
      <Skill
        label="SEO"
        description="SEO-friendly Single Page Application is possible."
        imageSrc={accessibility}
      />
    </section>
  );
};

export default ListSkills;
