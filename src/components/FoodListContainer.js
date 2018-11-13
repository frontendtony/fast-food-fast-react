import React from 'react';

const FoodListContainer = (props) => {
  return (
    <div className="raised food-list-container">
      <ul className="food-list">
        <li className="food-card">
          <div className="img-thumbnail">
            <img alt="Chicken Salad" src="https://www.ndtv.com/cooks/images/chicken%20cheese%20salad-620.jpg?downsize=650:400&output-quality=70&output-format=webp" />
          </div>
          <div className="food-details">
            <p>
              <span className="semi-bold">Chicken & Cheese Salad</span>
            </p>
            <p>
              <span className="bold">{"\u20A6"}2,500</span>
            </p>
            <p>
              <span className="semi-bold">Quantity: </span>
              <span>1</span>
            </p>
            <p>
              <span className="semi-bold">Status: </span>
              <span>Delivered</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FoodListContainer;
