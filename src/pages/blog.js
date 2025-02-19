import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ArticleCard from "../components/article";

const Blog = ({ data }) => {
  const articles = data.allMdx.nodes;
  const tags = Array.from(
    articles
      .flatMap((article) => article.frontmatter.tags)
      .reduce((set, tag) => set.add(tag), new Set())
  );

  return (
    <Layout>
      <section className="articles">
        <h2>Articles and tutorials</h2>
        <div className="articles">
          <article>
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.frontmatter.title}
                url={`/blog/${article.frontmatter.slug}`}
                excerpt={article.excerpt}
              />
            ))}
          </article>
        </div>
      </section>
      <section className="categories">
        <h2>Browser by Category</h2>
        <div>
          {tags.map((tag) => (
            <Link to={`/blog/${tag}`} key="tags">
              {tag}
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          tags
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export default Blog;

export const Head = () => <Seo />;
