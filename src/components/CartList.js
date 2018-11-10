import React from 'react';
import _ from 'lodash';

const CartList = (props) => {

  const { cart, addCommaToNum, removeFromCart } = props;
  const cartList = _.map(cart, (item) => {
    const { id, name, cost, image } = item;
    return (
      <li className="raised horizontal card" key={id}>
        <div className="img-thumbnail">
          <img src={image} alt={name} />
        </div>
        <div className="horizontal card-details">
          <h4 className="food-name">{name}</h4>
          <h6 className="amount">
            Amount: {"\u20A6"}
            <span className="amount">{addCommaToNum(cost)}</span>
          </h6>
          <div className="order-buttons">
            <button className="big button decline" onClick={() => removeFromCart(id)}>
              Remove
            </button>
          </div>
        </div>
      </li>  
    );
  });
  
  return (
    <ul className="vertical list">
      {cartList}
    </ul>
  );
}


export default CartList;
