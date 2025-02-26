import * as React from "react";
import Experience from "./experience";
import Card from "./card";

const Work = () => {
  return (
    <section className="work">
      <Card className="resume">
        <h6>Experience</h6>
        {resume.map((xp) => (
          <Experience {...xp} />
        ))}
      </Card>

      <Card>
        <p>
          I've worked with a range of tech stacks including
          <b>Dart, C#, Ruby and NodeJS 🖤 </b> and enviroments ranging from go
          horse driven development startups, to everything needs a ticket
          corporate.
        </p>
      </Card>

      <Card>
        <p>
          In recent roles I've lead several workshops on unit test and code best
          practices. I've also like to mentor junior devs and also learn from
          them.
        </p>
      </Card>

      <Card>
        <p>
          In my past role at Winedirect I've fixed our CI pipeline reducing our
          flaky test to <b>ZERO</b> improving developer delivery and also
          re-engineered our legacy reporting system to{" "}
          <b>reduce delivering time by 90%</b>
        </p>
      </Card>

      <Card>
        <p>I'm currently located in Brazil 🇧🇷</p>
      </Card>
    </section>
  );
};

const resume = [
  { title: "Fullstack Engineer", period: "2022 - 2025", company: "Winedirect" },
  { title: "Fullstack Engineer", period: "2021 - 2022", company: "Ambev Tech" },
  { title: "Fullstack Engineer", period: "2020 - 2021", company: "Cadmus" },
  { title: "Fullstack Engineer", period: "2020 - 2020", company: "BURH" },
  {
    title: "Fullstack Engineer",
    period: "2019 - 2020",
    company: "Codeminer42",
  },
  {
    title: "Fullstack Engineer",
    period: "2016 - 2019",
    company: "Informatech",
  },
];

export default Work;
