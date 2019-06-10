import React from 'react';
import styled from 'styled-components';

const PostHeaderComponent = ({ className, name }) => (
  <header className={className}>
    <h3>{name}</h3>
  </header>
);

export const PostHeader = styled(PostHeaderComponent)`
  background-color: #55a5da;
  color: #fff;
  height: 5rem;
  padding: 1rem 2rem;
`;
