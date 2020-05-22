import React from "react";

// components
import Skill from "src/components/list-skills/skill/skill";
import Technology from "src/components/technology/technology";

// helpers
import accessibility from "./illustrations/accessibility.png";
import frontEndDevelopment from "./illustrations/front-end-development.png";
import seo from "./illustrations/seo.png";
import {
  FaAccessibleIcon,
  FaChartBar,
  FaFileAlt,
  FaJsSquare,
  FaLowVision,
  FaProjectDiagram,
  FaReact,
  FaSass,
  FaUniversalAccess,
} from "react-icons/fa";
import "./list-skills.scss";

const cls = "list-skills";

const ListSkills: React.FC = () => {
  const frontEndIcons = (): JSX.Element => (
    <>
      <Technology icon={<FaReact />} label="React" />
      <Technology icon="typescript" label="TypeScript" />
      <Technology icon={<FaJsSquare />} label="JavaScript" />
      <Technology icon={<FaSass />} label="Sass" />
    </>
  );
  const accessibilityIcons = (): JSX.Element => (
    <>
      <Technology icon={<FaUniversalAccess />} label="Universal access" />
      <Technology icon={<FaLowVision />} label="Low vision" />
      <Technology icon={<FaAccessibleIcon />} label="Physical disability" />
    </>
  );
  const seoIcons = (): JSX.Element => (
    <>
      <Technology icon={<FaChartBar />} label="Performance" />
      <Technology icon={<FaProjectDiagram />} label="Structure" />
      <Technology icon={<FaFileAlt />} label="Content & meta" />
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
