import React from "react";

import "./skill.scss";
import Technology from "src/components/technology/technology";

interface IProps {
  label: string;
  description: string;
  imageSrc: string;
}

const cls = "skill";

const Skill: React.FC<IProps> = ({ label, description, imageSrc }) => {
  return (
    <div className={cls}>
      <div className={cls + "__intro"}>
        <div className={cls + "__intro-container"}>
          <h3 className={cls + "__label"}>{label}</h3>
          <p className={cls + "__description"}>{description}</p>
          <Technology icon="react" label="React" />
          <Technology icon="typescript" label="TypeScript" />
          <Technology icon="js-square" label="JavaScript" />
          <Technology icon="sass" label="Sass" />
        </div>
      </div>
      <p className={cls + "__detail"}>
        {/* eslint-disable-next-line max-len */}
        <img src={imageSrc} alt=""/>
      </p>
    </div>
  );
};

export default Skill;

