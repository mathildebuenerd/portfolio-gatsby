import React from "react";
import Layout from "src/components/layout/layout";
import ListTalks from "src/components/list-talks/list-talks";
import HeadCommon from "src/components/head-common/head-common";

const AboutPage: React.FC = () => (
  <Layout>
    <HeadCommon />
    <ListTalks />
  </Layout>
);

export default AboutPage;
