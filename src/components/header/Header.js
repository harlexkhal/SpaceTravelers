import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';

const Header = () => (
  <header>
    <NavLink to="/">
      <img src={logo} alt="logo" />
      {'Space Travelers\' Hub'}
    </NavLink>
    <nav>
      <NavLink to="/">Rocket</NavLink>
      <NavLink to="/mission">Mission</NavLink>
      <hr />
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  </header>
);

export default Header;
