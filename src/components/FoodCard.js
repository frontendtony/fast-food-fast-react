import React from 'react';

const FoodCard = (props) => {
  const { food: { id, name, cost, image }, status } = props;
  return (
    <li className="food-card" key={id}>
      <div className="img-thumbnail">
        <img alt="Chicken Salad" src={image} />
      </div>
      <div className="food-details">
        <p>
          <span className="semi-bold">{name}</span>
        </p>
        <p>
          <span className="bold">{"\u20A6"}{cost}</span>
        </p>
        <p>
          <span className="semi-bold">Quantity: </span>
          <span>1</span>
        </p>
        <p>
          <span className="semi-bold">Status: </span>
          <span>{status}</span>
        </p>
      </div>
    </li>
  );
};

export default FoodCard;
