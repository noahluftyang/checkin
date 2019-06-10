import React from 'react';

import { BaseNav, Map, ProfileHistory, ProfileSearch, SuccessModal } from '../../components';

export const HomeContainer = ({ history, success }) => (
  <>
    <ProfileSearch />
    <Map />
    <ProfileHistory history={history} />
    <BaseNav />
    {success ? <SuccessModal /> : null}
  </>
);
