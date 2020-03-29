import React from "react";

import typescript from "./icon/typescript.png";
import "./technology.scss";

interface IProps {
  icon: string;
  label: string;
  type: "fas" | "fab";
}

const cls = "technology";

const Technology: React.FC<IProps> = ({ icon, label, type }) => {
  const iconCls = `${cls}__icon ${type} fa-${icon}`;
  // Font-awesome does not provide a TypeScript icon, so the image is stored locally
  return (
    <div className={cls}>
      {icon == "typescript"
        ? <img className={`${cls}__icon`} src={typescript} alt=""/>
        : <i className={iconCls} aria-hidden="true"></i>
      }
      <span className={cls + "__label"}>{label}</span>
    </div>
  );
};

export default Technology;

