import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import { Link } from "gatsby";
const NotFound = () => {
  return (
    <Layout>
      <Head title='Page Not Found' />
      <h1>Page Not Found</h1>
      <p>
        <Link to='/'>Head home</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
