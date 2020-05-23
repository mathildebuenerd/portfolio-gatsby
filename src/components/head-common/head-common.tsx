import React from "react";
import { Helmet } from "react-helmet";

import ogImage from "src/components/who-i-am/illustrations/main-illustration.png";

const title = "Mathilde Buenerd - Front-end Developer in Hamburg";
const description =
  "Frontend user interface developer based in Hamburg focusing on web development with modern frontend technologies and practices.";

const HeadCommon: React.FC = () => (
  <Helmet>
    <html lang="en" />

    <title>{title}</title>
    <meta name="description" content={description} />
    {/*Open Graph*/}
    <meta property="og:site_name" content={title} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content="mathildebuenerd.dev" />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:type" content="website" />
    {/*Twitter cards*/}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@mathildebuenerd" />
    <meta name="twitter:creator" content="@mathildebuenerd" />

    {/*Google Verification for Search console*/}
    <meta
      name="google-site-verification"
      content="2KhmX6FNgKG2U33x-R3bfYKLN--ukwfGuKjWm0wL-WQ"
    />
  </Helmet>
);

export default HeadCommon;
