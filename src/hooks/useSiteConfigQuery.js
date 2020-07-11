import { useStaticQuery, graphql } from 'gatsby';

// static query
export const useStaticSiteQuery = () => {
  const data = useStaticQuery(graphql`
    query ConfigQuery {
      markdownRemark(frontmatter: { type: { eq: "config" } }) {
        frontmatter {
          logo {
            publicURL
          }
          menu {
            id
            link
            name
          }
        }
      }
    }
  `);
  return data.markdownRemark.frontmatter;
};
