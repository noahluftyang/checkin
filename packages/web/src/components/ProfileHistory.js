import React, { PureComponent } from 'react';
import styled from 'styled-components';

class ProfileHistoryComponent extends PureComponent {
  render() {
    const { className, locations } = this.props;

    return (
      <div className={className}>
        <CheckinCount>
          <strong>9</strong>
          <span> Check-ins</span>
        </CheckinCount>
        <CheckinList>
          <CheckinItem>
            <Icon>
              <Line />
              <Circle />
            </Icon>
            <Information>
              <Title>중앙도서관</Title>
              <Sub>흑석동</Sub>
              <Sub>오늘 오후 10:09</Sub>
              <Mention>19시간째 경영전략 공부중</Mention>
            </Information>
          </CheckinItem>
          <CheckinItem>
            <Icon>
              <Line />
              <Circle />
            </Icon>
            <Information>
              <Title>해방광장</Title>
              <Sub>흑석동</Sub>
              <Sub>오늘 오후 8:08</Sub>
              <Mention>광장으로 오세요!</Mention>
            </Information>
          </CheckinItem>
          <CheckinItem>
            <Icon>
              <Line />
              <Circle />
            </Icon>
            <Information>
              <Title>기숙사식당(블루미르홀)</Title>
              <Sub>흑석동</Sub>
              <Sub>오늘 오후 8:07</Sub>
              <Mention>오늘 점심 무엇?ㄷㄷ</Mention>
            </Information>
          </CheckinItem>
          <CheckinItem>
            <Icon>
              <Line />
              <Circle />
            </Icon>
            <Information>
              <Title>법학관</Title>
              <Sub>흑석동</Sub>
              <Sub>오늘 오후 8:06</Sub>
              <Mention>여긴 법학관! 나랑 밥먹을 사람~</Mention>
            </Information>
          </CheckinItem>
          <CheckinItem>
            <Icon>
              <Line />
              <Circle />
            </Icon>
            <Information>
              <Title>법학관</Title>
              <Sub>흑석동</Sub>
              <Sub>오늘 오후 8:06</Sub>
              <Mention>여긴 법학관! 나랑 밥먹을 사람~</Mention>
            </Information>
          </CheckinItem>
          {locations.map(({ message, time, title }) => (
            <CheckinItem>
              <Icon>
                <Line />
                <Circle />
              </Icon>
              <Information>
                <Title>{title}</Title>
                <Sub>흑석동</Sub>
                <Sub>{time}</Sub>
                <Mention>{message}</Mention>
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

  & > strong {
  }

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
  margin-top: 0.5rem;
`;

export const ProfileHistory = styled(ProfileHistoryComponent)`
  background-color: #fff;
  border-top: 1px solid #d3d3d3;
  flex: 1;
`;
