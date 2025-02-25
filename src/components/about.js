import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import DarkClouds from "../assets/dark-clouds.svg";
import Clouds from "../assets/clouds.svg";

const About = () => (
  <section className="about">
    <div className="about__image">
      <StaticImage
        alt="Felipe's profile picture"
        src="../images/profile-pic-1.png"
      />
    </div>
    <div className="about__text">
      <h1 className="about__title">
        Hello!<span className="wave">👋🏼</span> I'm Felipe,
      </h1>
      <p>
        A <b>software engineer</b> building full stack applications since 2016.
      </p>
      <p>
        I've worked with a range of tech stacks{" "}
        <b>(Dart, C#, Ruby and NodeJS 🖤 )</b> and enviroments ranging from go
        horse driven development startups, to everything needs a ticket
        corporate.
      </p>
      <p>
        Besides work I like to read, practice sports (any kind that takes me
        outside haha), petting my cats and playing piano.
      </p>
    </div>

    <DarkClouds className="dark-clouds" />
    <Clouds className="clouds" />
  </section>
);

export default About;
