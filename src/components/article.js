import * as React from "react";
import { Link } from "gatsby";

const Article = ({ title, excerpt, url }) => {
  return (
    <article className="article">
      <Link className="article__title" to={url}>
        {title}
      </Link>
      <p className="article__excerpt">{excerpt}</p>
    </article>
  );
};

export default Article;
