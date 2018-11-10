import React from 'react';

const CartFooter = (props) => {
  const { total, addCommaToNum, emptyCart } = props;
  return (
    <div className="cart-footer">
      <input 
          className="raised address input" type="text" 
          placeholder="Enter optional delivery address" />
      <div className="cart-checkout-group">
        <h6 className="total amount">Total: {"\u20A6"} 
          <span id="total"> {addCommaToNum(total)} </span>
        </h6>
        <div className="horizontal button-group">
          <button className="raised large checkout button complete">
            Checkout
          </button>
          <button 
            className="raised inverted large button decline"
            onClick={emptyCart}>
            Empty Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartFooter;
