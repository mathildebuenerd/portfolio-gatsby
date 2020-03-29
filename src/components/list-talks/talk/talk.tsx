import React from "react";

import { IUrl } from "src/interfaces";

import "./talk.scss";

interface IProps {
  title: string;
  event?: string;
  place?: string;
  date?: string;
  slidesUrl?: IUrl;
}

const cls = "talk";

const Talk: React.FC<IProps> = ({ title, event, place, date, slidesUrl }) => {
  return (
    <div className={cls}>
      <span className={cls + "__title"}>{title}</span>
      {event && <span className={cls + "__event"}>{event}</span>}
      {date && <span className={cls + "__date"}>{date}</span>}
      {place && <span className={cls + "__place"}>{place}</span>}
      {slidesUrl && (
        <a className={cls + "__slides"} href={slidesUrl}>
          Slides
        </a>
      )}
    </div>
  );
};

export default Talk;
