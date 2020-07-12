import React from 'react';
import { Link } from 'gatsby';
// styles
import { Nav } from './Menu.styles';

//implicit return
//content/siteconfig.md
const Menu = ({ items }) => (
  <Nav>
    {items.map((item) => (
      <li key={item.id}>
        <Link to={item.link} activeClassName="active">
          {item.name}
        </Link>
      </li>
    ))}
  </Nav>
);

export default Menu;
