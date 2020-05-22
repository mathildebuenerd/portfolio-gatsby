import React from "react";
import { Helmet } from "react-helmet";

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
    {/*<meta property="og:url" content="" />*/}
    <meta property="og:image" content="" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:type" content="website" />
    {/*Twitter cards*/}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@mathildebuenerd" />
    <meta name="twitter:creator" content="@mathildebuenerd" />
    {/*<meta property="og:url" content="" />*/}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {/*<meta property="og:image" content="" />*/}

    {/*Font Awesome*/}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"></script>
  </Helmet>
);

export default HeadCommon;
