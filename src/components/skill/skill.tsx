import React from "react";
import "./skill.scss";

interface IProps {
  label: string;
  description: string;
}
const cls = "what-i-do";

const Skill: React.FC<IProps> = ({ label, description }) => {
  return (
    <div className={cls}>
      <h3 className={cls + "__label"}>{label}</h3>
      <p className={cls + "__description"}>{description}</p>
    </div>
  );
};

export default Skill;

