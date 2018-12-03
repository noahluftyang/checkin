import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Inbox } from '../images/inbox.svg';

const ProfileSearchComponent = ({ className }) => (
  <section className={className}>
    <Avatar />
    <Input placeholder="검색" type="text" />
    <InboxButton>
      <Inbox />
    </InboxButton>
  </section>
);

const Avatar = styled.div`
  background-color: #fff;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
`;

const Input = styled.input`
  align-items: center;
  background-color: #4c9dfc;
  border: 1px solid #3a94fb;
  border-radius: 20px;
  color: #fff;
  flex: 1;
  padding: 0.5rem;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #80d1fd;
    text-align: center;
  }
`;

const InboxButton = styled.button`
  & > svg {
    fill: #fff;
  }
`;

export const ProfileSearch = styled(ProfileSearchComponent)`
  align-items: center;
  background-color: #3a94fb;
  display: flex;
  padding: 1rem 1rem 5rem;

  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;
