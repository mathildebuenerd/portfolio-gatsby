import React from "react";
import { Helmet } from "react-helmet";

const HeadCommon: React.FC = () => (
  <Helmet>
    <link
      href="https://fonts.googleapis.com/css?family=Inter:300,400,500,700&display=swap"
      rel="stylesheet"
    />
    {/*Font Awesome*/}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"></script>
  </Helmet>
);

export default HeadCommon;
