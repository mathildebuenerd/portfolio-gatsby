import React from "react";

import "./skill.scss";

interface IProps {
  customContent?: () => JSX.Element;
  description: string;
  imageSrc: string;
  label: string;
}

const cls = "skill";

const Skill: React.FC<IProps> = ({
  label,
  description,
  imageSrc,
  customContent,
}) => {
  return (
    <div className={cls}>
      <div className={cls + "__intro"}>
        <div className={cls + "__intro-container"}>
          <h3 className={cls + "__label"}>{label}</h3>
          <p className={cls + "__description"}>{description}</p>
          {customContent && customContent()}
        </div>
      </div>
      <div className={cls + "__image-container"}>
        <img className={cls + "__image"} src={imageSrc} alt="" />
      </div>
    </div>
  );
};

export default Skill;
