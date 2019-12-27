import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Skill } from "../components/skill/skill"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>This is my page!</h1>
    <Link to="/page-2/">Go to page 2</Link>
    <Skill />
  </Layout>
)

export default IndexPage
