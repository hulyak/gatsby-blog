import React from 'react';
// internal links
import { Link } from 'gatsby';

import Menu from 'components/Menu';
//Hooks
import { useSiteConfigQuery } from 'hooks/useSiteConfigQuery';
//styles
import { Wrapper, Logo } from './Header.styles';

//if there is no title, it will be an empty string
const Header = ({ siteTitle = `` }) => {
  const siteConfig = useSiteConfigQuery();

  return (
    <Wrapper>
      <Menu items={siteConfig.menu} />
      {/* to props for home page path */}
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
      <div>Mode Button</div>
    </Wrapper>
  );
};

export default Header;
