import React, { Component } from 'react';
import './styles/LocationAndHours.css';
import outdoor from "./media/outdoor.jpg"
import LazyLoad from 'react-lazy-load';
import ImageLoader from "./ImageLoader.js";

class LocationAndHours extends Component {
  render() {
    return (
        <div className="LocationAndHours">
          <LazyLoad
            debounce={false}
            throttle={250}>
            <ImageLoader src={outdoor} className="Cover-image"/>
          </LazyLoad>
          <div className="Info-container">
            <p className="Address-text">
            56 CANNONBALL ROAD
            </p>
            <p className="Info-head">
            SHARON, MA
            </p>
            <p className="Hours-text">
            TUESDAY THROUGH SUNDAY
            <br/>
            9:00 AM - 2:00 PM
            </p>
          </div>
        </div>
    );
  }
}

export default LocationAndHours;
