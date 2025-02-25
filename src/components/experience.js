import * as React from "react";

const Experience = ({ title, company, period }) => {
  return (
    <div className="experience">
      <p>{title}</p>
      <p>{period}</p>
      <p>{company}</p>
    </div>
  );
};

export default Experience;
