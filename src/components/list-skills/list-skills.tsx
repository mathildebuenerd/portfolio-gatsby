import React from "react";

// components
import Skill from "src/components/list-skills/skill/skill";
import Technology from "src/components/technology/technology";

// helpers
import accessibility from "./illustrations/accessibility.png";
import frontEndDevelopment from "./illustrations/front-end-development.png";
import seo from "./illustrations/seo.png";
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
        description="I carry a professional experience with TypeScript and React, but also personal experience with several technologies such as Angular, Ionic, Unity and Wordpress."
        imageSrc={frontEndDevelopment}
        customContent={frontEndIcons}
      />
      <Skill
        label="Accessibility & Usability"
        description="Improving accessibility is an opportunity to improve usability for all users. Ensure cross-browser compatibility and respect of W3C, WCAG and WAI-ARIA standards."
        imageSrc={accessibility}
        customContent={accessibilityIcons}
      />
      <Skill
        label="SEO"
        description="Optimizing Page Speed and crawlability as well as mobile-first development to help search engines understand your website and attract more visitors."
        imageSrc={seo}
        customContent={seoIcons}
      />
    </section>
  );
};

export default ListSkills;
