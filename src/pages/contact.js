import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head title='Contact' />
      <section className='section'>
        <h1>Contact</h1>
        <p>
          If you have any questions, I am happy to answer on my email. On my
          github, you can find many of my projects, web apps and also a few Java
          projects I have created in my spare time. I look forward to hearing
          from you.
        </p>
        <br />
        <p>Email: AkhereAIhoeghinlan@gmail.com</p>
        <p>Github: Akhere-G</p>
      </section>
    </Layout>
  );
};

export default ContactPage;
