import React from 'react';

function SlideImage({src}){
  let imgStyles={
    width:100 + "%",
    height: "auto",
  }
  return <img src={src} alt="slide-img" style={imgStyles}></img>
}

export default SlideImage;
