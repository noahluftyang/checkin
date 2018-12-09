import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';

const BaseNavComponent = ({ className }) => (
  <footer className={className}>
    <NavLink to="/">Profile</NavLink>
    <NavLink to="/checkin">Map</NavLink>
    <NavLink to="/history">History</NavLink>
  </footer>
);

const NavLink = styled(Link)`
  flex: 1;
  text-align: center;
  padding: 1rem;
`;

export const BaseNav = styled(BaseNavComponent)`
  background-color: #fff;
  border-top: 1px solid #d3d3d3;
  bottom: 0;
  left: 0;
  display: flex;
  position: fixed;
  right: 0;
  z-index: 10;
`;
