import React from "react";

import "./skill.scss";
import Technology from "src/components/technology/technology";

interface IProps {
  label: string;
  description: string;
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
        <img src="https://designtarget.org/wp-content/uploads/elementor/thumbs/84-desktop-wallpaper-ocin9s9e6i5mga7wkig6kw4p7kf22g3eyygi23rte0.png" alt=""/>
      </p>
    </div>
  );
};

export default Skill;

