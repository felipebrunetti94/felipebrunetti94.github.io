import * as React from "react";

const Experience = ({ title, company, period }) => {
  return (
    <div className="experience">
      <p>
        {company} {period}
      </p>
      <p>{title}</p>
    </div>
  );
};

export default Experience;
