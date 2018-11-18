import React, { PureComponent } from 'react';

export class ListComponent extends PureComponent {
  render() {
    return (
      <div className={this.props.className}>
        <p>9 Check-ins</p>
        <ul>
          <li>해방광장</li>
          <li>기숙사식당(블루미르홀)</li>
        </ul>
      </div>
    );
  }
}
