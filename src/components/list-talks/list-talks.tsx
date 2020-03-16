import React from "react";

import "./list-talks.scss";
import Talk from "src/components/list-talks/talk/talk";

const cls = "list-talks";

const ListTalks: React.FC = () => {
  return (
    <section className={cls}>
      <h2 className={cls + "__title"}>Talks</h2>
      <Talk
        title={"What is Chili Design?"}
        event={"Akademie Schloss Solitude"}
        date={"22.06.2019"}
        place={"Stuttgart"}
      />
      <Talk
        title={"Jouska: A Speculation on AI in Sentiment Analysis"}
        event={"Pecha Kucha AI Night"}
        date={"24.05.2019"}
        place={"HEK Basel"}
      />
    </section>
  );
};

export default ListTalks;
