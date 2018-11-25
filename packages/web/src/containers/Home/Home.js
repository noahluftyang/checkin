import React from 'react';

import { List, Map, Search } from '../../components';

export const HomeContainer = ({ locations }) => (
  <>
    <Search />
    <Map />
    <List locations={locations} />
  </>
);
