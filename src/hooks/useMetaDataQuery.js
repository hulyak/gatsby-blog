import { useStaticQuery, graphql } from 'gatsby';

export const useMetaDataQuery = () => {
  // localhost:8000/___graphql   query data
  const data = useStaticQuery(graphql`
    query MetaDataQuery {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);
  // console.log(data);
  return data.site.siteMetadata;
};
