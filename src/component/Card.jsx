import React from 'react';
import "../assets/SCSS/Card.scss"

function Card({ imageSrc, text , heading, subText}) {
  return (
    <div className="card main-card">
      <img className="card-img-top" src={imageSrc} alt="Card image cap" />
      <div className="card-body">
      <p className="card-text">{subText}</p>
      <h4 className="card-text">{heading}</h4>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
