import React from 'react';
import { graphql } from 'gatsby';
//components
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Hero from 'components/Hero';
import BlogPostCard from 'components/BlogPostCard';

// layout wrapper
const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <main>
        <BlogPostCard />
      </main>
    </Layout>
  );
};

export default IndexPage;

// http://localhost:8000/___graphql query blogs
export const indexQuery = graphql`
  query blogListQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            readingTime {
              text
            }
          }
          frontmatter {
            date
            title
            image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;
