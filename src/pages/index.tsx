import React from "react";

import Layout from "src/components/layout/layout";
import WhoIAm from "src/components/who-i-am/who-i-am";
import WhatIDo from "src/components/what-i-do/what-i-do";
import ContactMe from "src/components/contact-me/contact-me";

const IndexPage: React.FC = () => (
  <Layout>
    <WhoIAm />
    <WhatIDo />
    <ContactMe />
  </Layout>
);

export default IndexPage;
