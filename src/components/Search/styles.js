import styled from 'styled-components';

import { SearchComponent } from './Search';

export const Search = styled(SearchComponent)`
  align-items: flex-start;
  background-color: #3a94fb;
  display: flex;
  height: 8rem;
  padding: 1rem;

  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const Avatar = styled.div`
  background-color: #fff;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
`;

export const Input = styled.input`
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

export const InboxButton = styled.button`
  & > svg {
    fill: #fff;
  }
`;
