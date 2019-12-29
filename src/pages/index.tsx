import React from "react";

import Layout from "src/components/layout/layout";
import WhoIAm from "src/components/who-i-am/who-i-am";
import WhatIDo from "src/components/what-i-do/what-i-do";
import ContactMe from "src/components/contact-me/contact-me";
import ListSkills from "src/components/list-skills/list-skills";

const IndexPage: React.FC = () => (
  <Layout>
    <WhoIAm />
    <WhatIDo />
    <ListSkills />
    <ContactMe />
  </Layout>
);

export default IndexPage;
