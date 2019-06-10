import { navigate } from '@reach/router';
import React, { createRef, PureComponent } from 'react';

import { POSITIONS } from './constants';

export class MapComponent extends PureComponent {
  map;

  mapRef = createRef();

  componentDidMount() {
    this.createMap();
    this.createMarker();
    // this.setCurrentPosition();
  }

  createMap = () => {
    const options = {
      center: new window.daum.maps.LatLng(37.504283, 126.95564),
      level: 3,
    };

    this.map = new window.daum.maps.Map(this.mapRef.current, options);
  };

  createMarker = () => {
    POSITIONS.forEach(({ latLng, title }) => {
      const marker = new window.daum.maps.Marker({
        clickable: true,
        map: this.map,
        position: latLng,
        title,
      });

      window.daum.maps.event.addListener(marker, 'click', () => {
        console.log('click!', title);
        navigate('/checkin');
      });
    });
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
