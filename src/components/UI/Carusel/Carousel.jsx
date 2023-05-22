import React, { useState, useRef, useEffect } from "react";
import "./Carousel.scss";

const TOTAL_SLIDES = 2; // n-1 in Array

const Carousel = ({ images, theme }) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);

  const desired = (e) => {
    setCurrent(Number(e.target.id));
  };

  useEffect(() => {
    ref.current.style.transition = "all 0.2s ease-in-out";
    ref.current.style.transform = `translateX(-${current}00%)`;
  }, [current]);

  return (
    <div className="wrapper">
      <div className="frame">
        <div className="box-container" ref={ref}>
          {images.map((img, index) => (
            <img key={index} src={img.photo} alt="" />
          ))}
        </div>
      </div>

      <div className="button-2-container">
        {images.map((img, index) => (
          <div
            className={`button-2 ${index === current && "active"} ${
              theme ? theme : ""
            }`}
            onClick={desired}
            id={index}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
