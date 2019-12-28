import React from "react";

import Layout from "src/components/layout/layout";
import Skill from "src/components/skill/skill";

const IndexPage: React.FC = () => (
  <Layout>
    <h1>This is my index page</h1>
    <Skill label="First skill" />
    <Skill label="Second skill" />
  </Layout>
);

export default IndexPage;
