import React, { Component } from 'react';
import './styles/Home.css';
import Slider from "./Slider.js";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Slider/>
      </div>
    );
  }
}

export default Home;
