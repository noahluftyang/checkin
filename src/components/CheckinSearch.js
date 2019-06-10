import React from 'react';
import styled from 'styled-components';

const CheckinSearchComponent = ({ className }) => (
  <section className={className}>
    <Input placeholder="장소선택" type="text" />
  </section>
);

const Input = styled.input`
  border-radius: 15px;
  flex: 1;
  padding: 0.5rem;

  &::placeholder {
    font-weight: 700;
    text-align: center;
  }
`;

export const CheckinSearch = styled(CheckinSearchComponent)`
  align-items: flex-end;
  background-color: #55a5da;
  display: flex;
  height: 5rem;
  left: 0;
  justify-content: center;
  padding: 1rem 3rem;
  position: fixed;
  right: 0;
  top: 0;
`;
