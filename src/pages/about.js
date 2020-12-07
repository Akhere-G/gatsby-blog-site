import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
const AboutPage = () => {
  return (
    <Layout>
      <Head title='About'></Head>
      <section className='section'>
        <h1>About</h1>
        <p>
          My name is Akhere Ihoeghinlan and I am a web developer who enjoys
          building interesting websites. This website is built using Gatsby.
          Contentful is used for the CMS.
        </p>
      </section>
    </Layout>
  );
};

export default AboutPage;
