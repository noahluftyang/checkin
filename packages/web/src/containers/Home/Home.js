import React from 'react';

import { Map, ProfileHistory, ProfileSearch } from '../../components';

export const HomeContainer = ({ locations }) => (
  <>
    <ProfileSearch />
    <Map />
    <ProfileHistory locations={locations} />
  </>
);
