import React,{useState} from 'react';
import './styles/Slider.scss';
import SlideImage from "./SlideImage.js";
import image1 from "./media/breakfast_assorted.jpg";
import image2 from "./media/oats.jpg";
import image3 from "./media/fruit.jpg"
import image4 from "./media/coffee.jpg"
import image5 from "./media/toasts.webp"

function Slider(){

  let slideArr = [
    <SlideImage src={image1}/>,
    <SlideImage src={image5}/>,
    <SlideImage src={image4}/>,
    <SlideImage src={image3}/>,
    <SlideImage src={image2}/>
  ];
  const [x, setX] = useState(0);
  const slideLeft = () => {
    (x === 0) ? setX(-100 * (slideArr.length-1)) : setX(x + 100)
  };

  const slideRight = () => {
    (x=== -100*(slideArr.length - 1)) ? setX(0) : setX(x - 100)
  };

  return(
    <div className="slider">
      {
        slideArr.map((item,index)=>{
          return(
            <div key={index} className = "slide" style={{transform:`translateX(${x}%)`, width: '100%', height: 'auto'}}>
              {item}
            </div>
          )
        })
      }
      <button id="left" onClick={slideLeft}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="right" onClick={slideRight}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  )
}

export default Slider;
