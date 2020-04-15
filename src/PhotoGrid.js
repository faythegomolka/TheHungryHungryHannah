import React from 'react';
import './styles/PhotoGrid.scss';
import a from "./media/FoodGridPics/1.png"
import b from "./media/FoodGridPics/2.png"
import c from "./media/FoodGridPics/16.png"
import d from "./media/FoodGridPics/3.png"
import e from "./media/FoodGridPics/14.png"
import f from "./media/FoodGridPics/6.png"
import g from "./media/FoodGridPics/7.png"
import h from "./media/FoodGridPics/8.png"
import i from "./media/FoodGridPics/9.png"
import j from "./media/FoodGridPics/10.png"
import LazyLoad from 'react-lazy-load';
import ImageLoader from "./ImageLoader.js";

function PhotoGrid(){
  return(
    <div className="PhotoGrid">
      <div className="Row-container">
        <div className="Image-container">
          <LazyLoad
          debounce={false}
          throttle={250}>
            <ImageLoader src={a} alt="food" className="Grid-image"/>
          </LazyLoad>
        </div>
        <div className="Image-container">
          <LazyLoad
          debounce={false}
          throttle={250}>
            <ImageLoader src={b} alt="food" className="Grid-image"/>
          </LazyLoad>
        </div>
        <div className="Image-container">
          <LazyLoad
          debounce={false}
          throttle={250}>
            <ImageLoader src={c} alt="food" className="Grid-image"/>
          </LazyLoad>
        </div>
        <div className="Image-container">
          <LazyLoad
          debounce={false}
          throttle={250}>
            <ImageLoader src={d} alt="food" className="Grid-image"/>
          </LazyLoad>
        </div>
        <div className="Image-container">
          <LazyLoad
          debounce={false}
          throttle={250}>
            <ImageLoader src={e} alt="food" className="Grid-image"/>
          </LazyLoad>
        </div>
      </div>
      <div className="Row-container">
        <div className="Image-container">
          <LazyLoad
          debounce={false}
          throttle={250}>
            <ImageLoader src={f} alt="food" className="Grid-image"/>
          </LazyLoad>
        </div>
        <div className="Image-container">
          <LazyLoad
          debounce={false}
          throttle={250}>
            <ImageLoader src={g} alt="food" className="Grid-image"/>
          </LazyLoad>
        </div>
        <div className="Image-container">
          <LazyLoad
          debounce={false}
          throttle={250}>
            <ImageLoader src={h} alt="food" className="Grid-image"/>
          </LazyLoad>
        </div>
        <div className="Image-container">
          <LazyLoad
          debounce={false}
          throttle={250}>
            <ImageLoader src={i} alt="food" className="Grid-image"/>
          </LazyLoad>
        </div>
        <div className="Image-container">
          <LazyLoad
          debounce={false}
          throttle={250}>
            <ImageLoader src={j} alt="food" className="Grid-image"/>
          </LazyLoad>
        </div>
      </div>
    </div>
  );
}

export default PhotoGrid;
