import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [ index, setIndex ] = useState(0);
  /* You will need to hanle the click on left and right button */
  const handleLeftClick = () => {
    if ( index > 0 ) {
      setIndex(index - 1)
    } else alert("You are on the first image")
  }
  const handleRightClick = () => {
    if ( index < images.length -1 ) {
      setIndex(index + 1)
    } else alert("You are on the last image.")
  }

  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left"  onClick={handleLeftClick}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[index].src} alt={images[index].alt} className="slide"  />

      <BsArrowRightCircleFill className="arrow arrow-right"  onClick={handleRightClick} />
    </div>
  );
};
