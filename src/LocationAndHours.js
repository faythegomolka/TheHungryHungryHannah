import React, { Component } from 'react';
import './styles/LocationAndHours.css';
import outdoor from "./media/outdoor.jpg"

class LocationAndHours extends Component {
  render() {
    return (
        <div className="LocationAndHours">
          <img src={outdoor} className="Cover-image"/>
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
