import React from 'react';
import styled from 'styled-components';

import { CHECKIN_SPOTS } from './constants';

const CheckinSpotsComponent = ({ className, navigatePost }) => (
  <ul className={className}>
    {CHECKIN_SPOTS.map(({ address, distance, name }, index) => (
      <li key={`spot-${index}`}>
        <PostLinkButton onClick={navigatePost} value={name}>
          <Name>{name}</Name>
          <Caption>{address}</Caption>
          <Caption>{distance}</Caption>
        </PostLinkButton>
      </li>
    ))}
  </ul>
);

const PostLinkButton = styled.button`
  padding: 1rem;
  width: 100%;
`;

const Name = styled.strong`
  font-weight: 900;
`;

const Caption = styled.h5`
  color: #7c7c7c;
  font-weight: 700;
`;

export const CheckinSpots = styled(CheckinSpotsComponent)`
  background-color: #fff;
  list-style: none;
  margin: 5rem 0 3rem;
  overflow: auto;
`;
