import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import DarkClouds from "../assets/dark-clouds.svg";
import Clouds from "../assets/clouds.svg";

const About = () => (
  <section className="about">
    <div className="about__content">
      <div className="about__image">
        <StaticImage
          alt="Felipe's profile picture"
          src="../images/profile-pic-1.png"
        />
      </div>
      <div className="about__text">
        <h1 className="about__title">
          Hello!<span className="wave">👋🏼</span> I'm Felipe.
        </h1>
        <p>
          A <b>Software Engineer</b> with 9 years of experience specialized in
          the javascript ecosystem like NodeJS, React and React Native.
        </p>
        <p>
          I’m also passionate about software architecture, functional design and
          DDD.
        </p>
        <p>
          Besides work I like to read, practice sports (any kind that takes me
          outside haha), petting my cats and playing piano.
        </p>
      </div>
    </div>

    <DarkClouds className="dark-clouds" />
    <Clouds className="clouds" />
  </section>
);

export default About;
