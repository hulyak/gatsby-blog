import React from 'react';
// internal links
import { Link } from 'gatsby';
//Hooks
import { useSiteConfigQuery } from 'hooks/useSiteConfigQuery';
//styles
import { Wrapper, Logo } from './Header.styles';

//if there is no title, it will be an empty string
const Header = ({ siteTitle = `` }) => {
  const siteConfig = useSiteConfigQuery();

  return (
    <Wrapper>
      {/* to props for home page path */}
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
    </Wrapper>
  );
};

export default Header;
