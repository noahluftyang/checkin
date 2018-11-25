import React, { PureComponent } from 'react';

import {
  CheckinCount,
  CheckinItem,
  CheckinList,
  Circle,
  Icon,
  Information,
  Line,
  Mention,
  Sub,
  Title,
} from './styles';

export class ListComponent extends PureComponent {
  render() {
    return (
      <div className={this.props.className}>
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
          {this.props.locations.map(({ message, time, title }) => (
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
