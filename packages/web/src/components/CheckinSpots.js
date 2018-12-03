import React from 'react';
import styled from 'styled-components';

import { CHECKIN_SPOTS } from './constants';

const CheckinSpotsComponent = ({ className }) => (
  <ul className={className}>
    {CHECKIN_SPOTS.map(({ address, distance, name }, index) => (
      <li key={`spot-${index}`}>
        <strong>{name}</strong>
        <h5>{address}</h5>
        <h5>{distance}</h5>
      </li>
    ))}
  </ul>
);

export const CheckinSpots = styled(CheckinSpotsComponent)`
  background-color: #fff;
  list-style: none;
  margin: 5rem 0 3rem;
  overflow: auto;
`;
