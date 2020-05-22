import React from "react";

import * as Lokalportal from "./images/lokalportal.png";
import * as ProHelvetia from "./images/pro-helvetia.png";
import * as BBVA from "./images/bbva.png";
import * as OpenClassrooms from "./images/openclassrooms.png";
import * as Mucem from "./images/mucem.png";
import * as Museomix from "./images/museomix.png";
import * as Frac from "./images/frac-paca.png";
import * as Bodmer from "./images/bodmer.png";

import "./references.scss";

const cls = "references";

const References: React.FC = () => {
  return (
    <section className={cls}>
      <h2 className={cls + "__title"}>
        <span>They trusted me</span>
      </h2>
      <p>
        Since 2014, I have worked internationally with companies and
        institutions from Germany, Switzerland, France, Spain and South Africa.
      </p>
      <div className={cls + "__logos"}>
        <img src={Lokalportal} alt="Lokalportal" />
        <img src={ProHelvetia} alt="Pro Helvetia" />
        <img src={BBVA} alt="BBVA Data & Analytics" />
        <img src={OpenClassrooms} alt="OpenClassrooms" />
        <img src={Mucem} alt="Mucem" />
        <img src={Museomix} alt="Museomix" />
        <img src={Bodmer} alt="Bodmer Foundation" />
        <img src={Frac} alt="Frac PACA" />
      </div>
    </section>
  );
};

export default References;
