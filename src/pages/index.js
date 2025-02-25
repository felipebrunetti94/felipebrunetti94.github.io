import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Work from "../components/work";
import About from "../components/about";

const IndexPage = () => {
  return (
    <Layout>
      <About />
      <Work />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
