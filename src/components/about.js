import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import DarkClouds from "../assets/dark-clouds.svg";
import Clouds from "../assets/clouds.svg";

const About = () => (
  <section className="about">
    <div className="about__image">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/profile-pic-1.png"
      />
    </div>
    <h1 className="about__title">Hello there!👋🏼 I'm Felipe.</h1>
    <p className="about__text">
      I'm software engineering building end to end applications with 9+ years of
      experience.
    </p>
    <p className="about__text">
      I’m eager reader and love to share knowledge either by mentoring or
      learning with my pears
    </p>
    <DarkClouds className="dark-clouds" />
    <Clouds className="clouds" />
  </section>
);

export default About;
