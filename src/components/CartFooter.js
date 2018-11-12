import React, { Component } from 'react';

class CartFooter extends Component {
  constructor(props) {
    super(props);

    this.state = { address: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      address: e.target.value
    });
  }

  render() {
    const { cart, total, addCommaToNum, emptyCart, checkout } = this.props;
    const { address } = this.state;
    return (
      <div className="cart-footer">
        <input 
          className="raised address input" type="text"
          placeholder="Enter optional delivery address"
          onChange={this.handleChange}
        />
        <div className="cart-checkout-group">
          <h6 className="total amount">Total: {"\u20A6"} 
            <span id="total"> {addCommaToNum(total)} </span>
          </h6>
          <div className="horizontal button-group">
            <button 
              className="raised large checkout button complete"
              onClick={() => checkout(cart, address)}>
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
}

export default CartFooter;
