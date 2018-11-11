import React from 'react';

import { NavLink } from './styles';

export const NavComponent = ({ className }) => (
  <nav className={className}>
    <NavLink to="/">Profile</NavLink>
    <NavLink to="/map">Map</NavLink>
    <NavLink to="/history">History</NavLink>
  </nav>
);
