import React from "react";

import "./skill.scss";

interface IProps {
  label: string;
  description: string;
}

const cls = "skill";

const Skill: React.FC<IProps> = ({ label, description }) => {
  return (
    <div className={cls}>
      <div className={cls + "__intro"}>
        <div className={cls + "__intro-container"}>
          <h3 className={cls + "__label"}>{label}</h3>
          <p className={cls + "__description"}>{description}</p>
        </div>
      </div>
      <p className={cls + "__detail"}>
        <img src="https://evie.undraw.co/images/undraw_browser.svg" alt=""/>
      </p>
    </div>
  );
};

export default Skill;

