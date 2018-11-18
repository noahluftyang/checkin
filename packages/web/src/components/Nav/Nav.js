import React from 'react';

import { NavLink } from './styles';

export const NavComponent = ({ className }) => (
  <nav className={className}>
    <NavLink to="/profile">Profile</NavLink>
    <NavLink to="/">Map</NavLink>
    <NavLink to="/history">History</NavLink>
  </nav>
);
