import React from "react";
import "./skill.scss";

interface IProps {
  label: string;
}

const Skill: React.FC<IProps> = ({ label }) => {
  return <div className="skill">{label}</div>;
};

export default Skill;

