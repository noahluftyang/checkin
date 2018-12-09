import { distanceInWordsToNow } from 'date-fns';
import ko from 'date-fns/locale/ko';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

class ProfileHistoryComponent extends PureComponent {
  render() {
    const { className, history } = this.props;

    return (
      <div className={className}>
        <CheckinCount>
          <strong>9</strong>
          <span> Check-ins</span>
        </CheckinCount>
        <CheckinList>
          {history.map(({ comment, time, name }) => (
            <CheckinItem>
              <Icon>
                <Line />
                <Circle />
              </Icon>
              <Information>
                <Title>{name}</Title>
                <Sub>흑석동</Sub>
                <Sub>{distanceInWordsToNow(time, { locale: ko })}</Sub>
                <Mention>{comment}</Mention>
              </Information>
            </CheckinItem>
          ))}
        </CheckinList>
      </div>
    );
  }
}

const CheckinCount = styled.p`
  border-bottom: 2px solid #d3d3d3;
  padding: 0.5rem 1rem;

  & > span {
    color: gray;
    font-weight: 500;
  }
`;

const CheckinList = styled.ul`
  list-style: none;
  max-height: 50vh;
  overflow: auto;
  padding: 0.5rem 0;
`;

const CheckinItem = styled.li`
  display: flex;

  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Icon = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  position: relative;
`;

const Circle = styled.div`
  background-color: #3a94fb;
  border-radius: 50%;
  height: 3rem;
  margin: 0.5rem 0;
  width: 3rem;
  z-index: 1;
`;

const Line = styled.div`
  background-color: #3a94fb;
  height: 100%;
  position: absolute;
  right: 22px;
  width: 3px;
`;

const Information = styled.div`
  border-bottom: 2px solid #d3d3d3;
  flex: 4;
  padding: 0.5rem 0;
`;

const Title = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
`;

const Sub = styled.p`
  color: gray;
  font-size: 0.8rem;
  line-height: 1.2;
`;

const Mention = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 0.5rem;
`;

export const ProfileHistory = styled(ProfileHistoryComponent)`
  background-color: #fff;
  border-top: 1px solid #d3d3d3;
  flex: 1;
`;
