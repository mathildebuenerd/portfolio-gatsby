import React from "react";

import Layout from "src/components/layout/layout";
import WhoIAm from "src/components/who-i-am/who-i-am";
import WhatIDo from "src/components/what-i-do/what-i-do";
import ContactMe from "src/components/contact-me/contact-me";
import ListSkills from "src/components/list-skills/list-skills";
import HeadCommon from "src/components/head-common/head-common";
import References from "src/components/references/references";

const IndexPage: React.FC = () => (
  <>
    <HeadCommon />
    <Layout>
      <WhoIAm />
      <WhatIDo />
      <ListSkills />
      <References />
      <ContactMe />
    </Layout>
  </>
);

export default IndexPage;
