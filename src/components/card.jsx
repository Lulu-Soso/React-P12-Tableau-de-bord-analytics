import React from 'react';

const Card = ({img, value, symbol, category}) => {
  return (
      <div className="card">
        <div className="card-content">
          <div className="card-img">
            <img src={img} alt="Icone Calories"/>
          </div>
          <div className="card-infos">
            <p className="card-value">{value}<span>{symbol}</span></p>
            <p className="card-category">{category}</p>
          </div>
        </div>
      </div>
  );
};

export default Card;
