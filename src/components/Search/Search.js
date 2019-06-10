import React from 'react';

import { Avatar, Input, InboxButton } from './styles';
import { ReactComponent as Inbox } from '../../images/inbox.svg';

export const SearchComponent = ({ className }) => {
  return (
    <section className={className}>
      <Avatar />
      <Input placeholder="검색" type="text" />
      <InboxButton>
        <Inbox />
      </InboxButton>
    </section>
  );
};
