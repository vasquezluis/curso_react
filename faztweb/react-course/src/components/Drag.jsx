import "./Drag.css"
import React, { useState, useEffect } from "react";
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'

function ImageSlider() {
  const [selectedImage, setSelectedImage] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [sliderPos, setSliderPos] = useState(0);
  const sliderRef = React.useRef(null);

  useEffect(() => {
    function handleMouseMove(event) {
      if (dragging) {
        const sliderRect = sliderRef.current.getBoundingClientRect();
        const containerWidth = sliderRef.current.parentNode.offsetWidth;
        const sliderWidth = sliderRect.width;
        const sliderLeft = sliderRect.left;
        const minLeft = 0;
        const maxLeft = containerWidth - sliderWidth;
        const newLeft = Math.max(minLeft, Math.min(maxLeft, event.clientX - sliderLeft - sliderWidth / 2));
        setSliderPos(newLeft);
      }
    }

    function handleMouseUp(event) {
      if (dragging) {
        const containerWidth = sliderRef.current.parentNode.offsetWidth;
        const sliderWidth = sliderRef.current.getBoundingClientRect().width;
        const offsetPercent = sliderPos / (containerWidth - sliderWidth);
        setSelectedImage(offsetPercent <= 0.5 ? 1 : 2);
        setDragging(false);
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, sliderPos]);

  return (
    <div className="slider-container">
      <div className="slider-track">
        <div
          className="slider-handle"
          ref={sliderRef}
          style={{ left: sliderPos }}
          onMouseDown={() => setDragging(true)}
        />
      </div>
      <div className="image-container">
        <img
          className={selectedImage === 1 ? "selected" : ""}
          src={`${image1}`}
          alt="Image 1"
        />
        <img
          className={selectedImage === 2 ? "selected" : ""}
          src={`${image2}`}
          alt="Image 2"
        />
      </div>
    </div>
  );
}

export default ImageSlider;