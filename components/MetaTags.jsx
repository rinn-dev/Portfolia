import Head from "next/head";
import React from "react";

const MetaTags = () => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <Head>
      {/* <!-- SEO Integrations --> */}
      <title>Htet Myat Linn — Web Developer</title>
      <meta name="title" content="Htet Myat Linn — Freelance Web Developer " />
      <meta
        name="description"
        content="Htet Myat Linn,  Web developer with good problem-solving skill and communication and one of the trusted freelance developers from Myanmar."
      />
      <meta
        name="keywords"
        content="htet myat linn, JAM stack developer, web developer, htet myat linn frontend freelancer, web developer, burmese fullstack develper, MERN developer"
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site_url} />
      <meta
        property="og:title"
        content="Htet Myat Linn — Freelance Web Developer "
      />
      <meta
        property="og:description"
        content="Htet Myat Linn,  Web developer with good problem-solving skill and communication and one of the trusted freelance developers from Myanmar."
      />
      <meta
        property="og:image"
        content={`${site_url}/images/htetmyatlinn.work.preview.png`}
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={site_url} />
      <meta
        property="twitter:title"
        content="Htet Myat Linn — Freelance Web Developer"
      />
      <meta
        property="twitter:description"
        content="Htet Myat Linn,  Web developer with good problem-solving skill and communication and one of the trusted freelance developers from Myanmar."
      />
      <meta
        property="twitter:image"
        content={`${site_url}/images/htetmyatlinn.work.preview.png`}
      />
      <link
        rel="shortcut icon"
        href={`${site_url}/images/htetmyatlinn.ico`}
        type="image/x-icon"
      />
      <meta
        name="google-site-verification"
        content="sXIcoxoT33LCIstGEXhYWrmMab1sLsjOd2lB9oUl6JI"
      />
    </Head>
  );
};

export default MetaTags;
