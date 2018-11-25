import styled from 'styled-components';

import { ListComponent } from './List';

export const List = styled(ListComponent)`
  background-color: #fff;
  border-top: 1px solid #d3d3d3;
  flex: 1;
`;

export const CheckinCount = styled.p`
  border-bottom: 2px solid #d3d3d3;
  padding: 0.5rem 1rem;

  & > strong {
  }

  & > span {
    color: gray;
    font-weight: 500;
  }
`;

export const CheckinList = styled.ul`
  list-style: none;
  max-height: 50vh;
  overflow: auto;
  padding: 0.5rem 0;
`;

export const CheckinItem = styled.li`
  display: flex;

  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  position: relative;
`;

export const Circle = styled.div`
  background-color: #3a94fb;
  border-radius: 50%;
  height: 3rem;
  margin: 0.5rem 0;
  width: 3rem;
  z-index: 1;
`;

export const Line = styled.div`
  background-color: #3a94fb;
  height: 100%;
  position: absolute;
  right: 22px;
  width: 3px;
`;

export const Information = styled.div`
  border-bottom: 2px solid #d3d3d3;
  flex: 4;
  padding: 0.5rem 0;
`;

export const Title = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
`;

export const Sub = styled.p`
  color: gray;
  font-size: 0.8rem;
  line-height: 1.2;
`;

export const Mention = styled.p`
  margin-top: 0.5rem;
`;
