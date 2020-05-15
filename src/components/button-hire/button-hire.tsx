import React from "react";

import "./button-hire.scss";

const cls = "button-hire";

const ButtonHire: React.FC = () => (
  <a className={cls} href={"#contact"}>
    <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text">Available for hire</span>
  </a>
);

export default ButtonHire;
