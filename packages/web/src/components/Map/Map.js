import React, { Component, createRef } from 'react';

export class MapComponent extends Component {
  map;

  mapRef = createRef();

  componentDidMount() {
    const options = {
      center: new window.daum.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    this.map = new window.daum.maps.Map(this.mapRef.current, options);
  }

  render() {
    return <div className={this.props.className} ref={this.mapRef} />;
  }
}
