import React from "react";

import typescript from "./icon/typescript.png";
import "./technology.scss";

interface IProps {
  icon: JSX.Element | "typescript";
  label: string;
}

const cls = "technology";

const Technology: React.FC<IProps> = ({ icon, label }) => {
  // Font-awesome does not provide a TypeScript icon, so the image is stored locally
  return (
    <div className={cls}>
      {icon == "typescript" ? (
        <div className={cls + "__icon"}>
          <img src={typescript} alt="" />
        </div>
      ) : (
        <div className={cls + "__icon"}>{icon}</div>
      )}
      <span className={cls + "__label"}>{label}</span>
    </div>
  );
};

export default Technology;
