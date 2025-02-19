import * as React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Seo = ({ children }) => {
  const siteMetadata = useSiteMetadata();

  if (children)
    return (
      <title>
        {children} • {siteMetadata.title}
      </title>
    );
  return <title>🚀 {siteMetadata.title}</title>;
};

export default Seo;
