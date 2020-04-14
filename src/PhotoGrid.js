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


function PhotoGrid(){
  return(
    <div className="PhotoGrid">
      <div className="Row-container">
        <div className="Image-container">
          <img src={a} alt="food" className="Grid-image"></img>
        </div>
        <div className="Image-container">
          <img src={b} alt="food" className="Grid-image"></img>
        </div>
        <div className="Image-container">
          <img src={c} alt="food" className="Grid-image"></img>
        </div>
        <div className="Image-container">
          <img src={d} alt="food" className="Grid-image"></img>
        </div>
        <div className="Image-container">
          <img src={e} alt="food" className="Grid-image"></img>
        </div>
      </div>
      <div className="Row-container">
        <div className="Image-container">
          <img src={f} alt="food" className="Grid-image"></img>
        </div>
        <div className="Image-container">
          <img src={g} alt="food" className="Grid-image"></img>
        </div>
        <div className="Image-container">
          <img src={h} alt="food" className="Grid-image"></img>
        </div>
        <div className="Image-container">
          <img src={i} alt="food" className="Grid-image"></img>
        </div>
        <div className="Image-container">
          <img src={j} alt="food" className="Grid-image"></img>
        </div>
      </div>
    </div>
  );
}

export default PhotoGrid;
