import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <div className="about">
        <div className="about__image">
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="../images/profile-pic-1.png"
          />
        </div>
        <h1 className="about__title">Hello there!👋🏼 I'm Felipe.</h1>
        <p className="about__text">
          I'm software engineering building end to end applications.
        </p>
        <p className="about__text">
          Experienced and versatile Software Engineer with expertise in API
          design, web development, and scalable architectures. Proven ability to
          deliver high-quality software solutions in startups and corporate
          environments. Adept at fostering team collaboration and mentoring
          junior developers to drive success.
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
