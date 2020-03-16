import React from "react";
import { Helmet } from "react-helmet";

const HeadCommon: React.FC = () => (
  <Helmet>
    <link href="https://fonts.googleapis.com/css?family=Inter:300,400,500,700&display=swap" rel="stylesheet" />
  </Helmet>
);

export default HeadCommon;
