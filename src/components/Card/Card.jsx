import "./Card.scss";
import star from "../../assets/star.fill.svg";

import more from "../../assets/Base.svg";
import { useState } from "react";

import Carousel from "../UI/Carusel/Carousel";

const Card = ({ theme = "dark", rating = 3.7, drink }) => {
  const svgColor = theme === "light" ? "#000000" : "#606063";

  console.log(svgColor);

  return (
    <div className={`card ${theme ? theme : ""}`}>
      <div className="card-content">
        <div className="card-header">
          <div className="stars">
            <img src={star} alt="star" />
            <span>{rating}</span>
          </div>

          <div className="more">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.78113 15.1387C7.84778 15.1777 7.9231 15.1988 8 15.2C8.0769 15.1988 8.15222 15.1777 8.21887 15.1387C8.30189 15.1004 10.1736 14.0207 12.0755 12.29C14.6792 9.90842 16 7.54215 16 5.24479C16.0007 4.29429 15.7008 3.36863 15.1445 2.60389C14.5882 1.83914 13.8048 1.27565 12.9094 0.99624C12.014 0.71683 11.0539 0.736242 10.1702 1.05162C9.28652 1.367 8.52584 1.96171 8 2.74834C7.47416 1.96171 6.71348 1.367 5.82978 1.05162C4.94608 0.736242 3.98597 0.71683 3.09059 0.99624C2.19521 1.27565 1.41179 1.83914 0.855478 2.60389C0.299168 3.36863 -0.000683344 4.29429 1.16937e-06 5.24479C1.16937e-06 7.54215 1.32076 9.90842 3.92453 12.29C5.82642 14.0207 7.69811 15.1004 7.78113 15.1387ZM1.96989 2.79991C2.61265 2.15185 3.48442 1.78777 4.39341 1.78777C5.07049 1.78715 5.73257 1.98874 6.29613 2.3671C6.8597 2.74547 7.29949 3.28365 7.56001 3.91374C7.59209 3.99703 7.64838 4.06861 7.72151 4.11907C7.79464 4.16954 7.88119 4.19655 7.96981 4.19655C8.05842 4.19655 8.14497 4.16954 8.2181 4.11907C8.29123 4.06861 8.34753 3.99703 8.3796 3.91374C8.68323 3.17446 9.23191 2.56434 9.93199 2.18748C10.6321 1.81063 11.4402 1.6904 12.2184 1.84733C12.9966 2.00425 13.6966 2.42859 14.1991 3.04794C14.7016 3.66729 14.9753 4.44326 14.9736 5.24341C14.9736 9.54793 9.17684 13.3041 7.96981 14.0328C6.76277 13.3041 0.966037 9.54793 0.966037 5.24341C0.966037 4.32692 1.32713 3.44796 1.96989 2.79991Z"
                fill={svgColor}
              />
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55229 12.5523 9 12 9Z"
                fill={svgColor}
              />
              <path
                d="M8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9Z"
                fill={svgColor}
              />
              <path
                d="M4 9C3.44771 9 3 8.55228 3 8C3 7.44771 3.44771 7 4 7C4.55228 7 5 7.44771 5 8C5 8.55228 4.55228 9 4 9Z"
                fill={svgColor}
              />
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="15"
                rx="7.5"
                stroke={svgColor}
              />
            </svg>
          </div>

          <Carousel theme={theme} images={drink.drinkImg} />
        </div>

        <div className="info">
          <p>{drink.name}</p>
          <p className={`title ${theme ? theme : ""}`}>{drink.title}</p>
          <p className="description">{drink.description}</p>
        </div>

        <div className={`footer ${theme ? theme : ""}`}>
          <div className="amount">{drink.amount}</div>
          <div className="country">
            <img src={drink.countryFlag} alt="countryFlag" />
            {drink.countryName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
