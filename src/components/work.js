import * as React from "react";
import Experience from "./experience";

const Work = () => {
  return (
    <section className="work">
      <div className="resume">
        {resume.map((xp) => (
          <Experience {...xp} />
        ))}
      </div>
      <div className="work__description">
        <p>
          I’m software engineer with more than 9 years of experience I’m
          specialized in the javascript ecosystem like node, react and react
          native, I’m also passionate about software architecture, functional
          design and DDD. I’m eager reader and love to share knowledge either by
          mentoring or learning with my pears With over 9 years of experience in
          software engineering, I specialize in the JavaScript ecosystem,
          including React and Node.js, and am passionate about creating dynamic,
          high-performance user interfaces. I believe my expertise aligns
          closely with Crazy Egg’s mission to deliver seamless, impactful
          customer experiences. Throughout my career, I have worked on a variety
          of projects, from complex enterprise applications to startups, with a
          focus on modular component development, scalable architecture, and
          test-driven development—all areas I see as key to your engineering
          practices. I am particularly excited about Crazy Egg’s fast and
          collaborative environment, where I believe my passion for mentoring
          and sharing knowledge will be a valuable asset to your team.
        </p>
        <p>
          In recent roles, I’ve driven measurable impact: re-engineering a
          legacy reporting system to reduce developer time by 90%, migrating
          monolithic frontends to React-based micro-frontends, and eliminating
          flaky tests through CI/CD pipeline optimizations. My focus on
          fostering collaboration—via workshops on testing and mentorship
          programs—has strengthened team output and code quality. I bring
          hands-on experience across diverse tech stacks, including Vue.js, Ruby
          on Rails, .NET Core, and React Native. At Codeminer42, I contributed
          to a cryptocurrency exchange platform (Omnitrade), ensuring security
          and scalability. At Cadmus, I built a .NET Core logistics dashboard to
          enhance supply chain visibility. My adaptability across frameworks and
          emphasis on fault tolerance allow me to deliver robust solutions
          tailored to evolving needs.
        </p>
      </div>
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
