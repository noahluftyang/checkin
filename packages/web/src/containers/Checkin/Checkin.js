import { navigate } from '@reach/router';
import React, { PureComponent } from 'react';

import { BaseNav, CheckinSearch, CheckinSpots } from '../../components';

export class CheckinContainer extends PureComponent {
  navigatePost = e => {
    const name = e.currentTarget.value;
    this.props.setCheckInName(name);
    navigate('/post');
  };

  render() {
    return (
      <>
        <CheckinSearch />
        <CheckinSpots navigatePost={this.navigatePost} />
        <BaseNav />
      </>
    );
  }
}
