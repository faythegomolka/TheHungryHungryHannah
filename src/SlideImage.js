import React from 'react';
import LazyLoad from 'react-lazy-load';
import './styles/SliderImage.css';
import ImageLoader from "./ImageLoader.js";

function SlideImage({src}){
  return(
    <LazyLoad
    debounce={false}
    throttle={250}>
      <ImageLoader src={src} alt="slide-img" className="img-styles"/>
    </LazyLoad>
  )
}

export default SlideImage;
