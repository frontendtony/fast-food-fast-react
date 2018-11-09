import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../store/actions/cart';
import _ from 'lodash';

class CartList extends Component {
  constructor(props) {
    super(props);

    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart(id) {
    this.props.removeFromCart(id);
  }

  renderCart() {
    return _.map(this.props.cart, (item) => {
      return (
        <li className="raised horizontal card" key={item.id}>
          <div className="img-thumbnail">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="horizontal card-details">
            <h4 className="food-name">{item.name}</h4>
            <h6 className="amount">
              Amount: {"\u20A6"}
              <span className="amount">{this.props.x(item.cost)}</span>
            </h6>
            <div className="order-buttons">
              <button className="big button decline" onClick={() => this.removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        </li>  
      );
    });
  }
  
  render() {
    return (
      <ul className="vertical list">
        {this.renderCart()}
      </ul>
    );
  }
}


export default connect(null, { removeFromCart})(CartList);
