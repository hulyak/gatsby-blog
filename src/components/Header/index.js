import React, { useState, useContext } from 'react';
// internal links
import { Link } from 'gatsby';

//components
import Menu from 'components/Menu';
import Hamburger from 'components/Hamburger';
import MobileMenu from 'components/MobileMenu';
import ModeButton from 'components/ModeButton';

//Hooks
import { useSiteConfigQuery } from 'hooks/useSiteConfigQuery';
//Context
import { ModeContext } from 'context/ModeProvider';
//styles
import { Wrapper, Logo } from './Header.styles';

//if there is no title, it will be an empty string
const Header = ({ siteTitle = `` }) => {
  const siteConfig = useSiteConfigQuery();

  const [darkMode, setDarkMode] = useContext(ModeContext);
  //state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
      <Menu items={siteConfig.menu} />
      {/* to props for home page path */}
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </Wrapper>
  );
};

export default Header;
