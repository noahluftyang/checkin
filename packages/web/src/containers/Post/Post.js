import { Link, navigate } from '@reach/router';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { PostHeader } from '../../components';

export class PostContainer extends PureComponent {
  handleCheckInComment = e => {
    const comment = e.target.value;
    this.props.setCheckInComment(comment);
  };

  postCheckIn = () => {
    const { checkin, location } = this.props;
    const spot = location.find(item => item.name === checkin.name);

    if (spot) {
      const history = {
        ...spot,
        comment: checkin.comment,
        time: new Date(),
      };
      this.props.appendHistory(history);
      navigate('/');
    }
  };

  render() {
    return (
      <>
        <PostHeader name={this.props.checkin.name} />
        <PostTextArea autoFocus onChange={this.handleCheckInComment} />
        <PostSubmitNav>
          <BackLink to="../checkin">
            <strong>취소</strong>
          </BackLink>
          <SubmitButton onClick={this.postCheckIn}>
            <strong>체크인</strong>
          </SubmitButton>
        </PostSubmitNav>
      </>
    );
  }
}

const PostTextArea = styled.textarea`
  border: 0;
  flex: 1;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  padding: 2rem;
  width: 100%;
`;

const PostSubmitNav = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const BackLink = styled(Link)`
  border: 1px solid #55a5da;
  border-radius: 20px;
  color: #55a5da;
  flex: 1;
  font-size: 1.1rem;
  margin: 0.5rem;
  padding: 0.25rem;
  text-align: center;
`;

const SubmitButton = styled.button`
  background-color: #55a5da;
  border: 1px solid #55a5da;
  border-radius: 20px;
  color: #fff;
  flex: 1;
  font-size: 1.1rem;
  margin: 0.5rem;
  padding: 0.25rem;
  text-align: center;
`;
