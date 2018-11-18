import React, { Component, createRef } from 'react';

export class MapComponent extends Component {
  map;

  mapRef = createRef();

  componentDidMount() {
    this.createMap();
    this.setCurrentPosition();
  }

  createMap = () => {
    const options = {
      center: new window.daum.maps.LatLng(33.450701, 126.570667),
      level: 4,
    };

    this.map = new window.daum.maps.Map(this.mapRef.current, options);
  };

  setCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const locPosition = new window.daum.maps.LatLng(lat, lon);

        this.map.setCenter(locPosition);
      });
    }
  };

  render() {
    return <div className={this.props.className} ref={this.mapRef} />;
  }
}
