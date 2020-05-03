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
  const frontEndIcons = (): JSX.Element => (
    <>
      <Technology icon="react" label="React" type="fab" />
      <Technology icon="typescript" label="TypeScript" type="fab" />
      <Technology icon="js-square" label="JavaScript" type="fab" />
      <Technology icon="sass" label="Sass" type="fab" />
    </>
  );
  const accessibilityIcons = (): JSX.Element => (
    <>
      <Technology icon="universal-access" label="Universal access" type="fas" />
      <Technology icon="low-vision" label="Low vision" type="fas" />
      <Technology
        icon="accessible-icon"
        label="Physical disability"
        type="fab"
      />
    </>
  );
  const seoIcons = (): JSX.Element => (
    <>
      <Technology icon="chart-bar" label="Performance" type="fas" />
      <Technology icon="project-diagram" label="Structure" type="fas" />
      <Technology icon="file-alt" label="Content & meta" type="fas" />
    </>
  );
  return (
    <section className={cls}>
      <Skill
        label="Front-end Development"
        description="I carry a professional experience with TypeScript and React, but also personal experience with several technologies sucgith as Angular, Ionic, Unity and Wordpress."
        imageSrc={accessibility}
        customContent={frontEndIcons}
      />
      <Skill
        label="Accessibility & Usability"
        description="Improving accessibility is an opportunity to improve usability for all users, through the respect of WCAG and WAI-ARIA standards."
        imageSrc={accessibility2}
        customContent={accessibilityIcons}
      />
      <Skill
        label="SEO"
        description=""
        imageSrc={accessibility}
        customContent={seoIcons}
      />
    </section>
  );
};

export default ListSkills;
