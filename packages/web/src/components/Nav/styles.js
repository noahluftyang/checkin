import { Link } from '@reach/router';
import styled from 'styled-components';

import { NavComponent } from './Nav';

export const Nav = styled(NavComponent)`
  background-color: #fff;
  border-top: 1px solid #d3d3d3;
  bottom: 0;
  left: 0;
  display: flex;
  position: fixed;
  right: 0;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  flex: 1;
  text-align: center;
  padding: 1rem;
`;
