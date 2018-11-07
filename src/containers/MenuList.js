import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchMenu from '../store/actions/fetchMenu';
import addToCart from '../store/actions/addToCart';

class MenuList extends Component {
  componentDidMount() {
    this.props.fetchMenu({ limit: 10 });
  }
  
  addToCart(food) {
    this.props.addToCart(food);
  }
  
  renderMenu() {
    return _.map(this.props.menu, (food) => {
      return (
        <li key={food.id} className="raised vertical card">
          <div className="img-thumbnail">
            <img src={food.image} alt={food.name} />
          </div>
          <div className="vertical card-details">
            <h4 className="food-name">{food.name}</h4>
            <h6 className="amount">Amount: {"\u20A6"} 
              <span className="amount">
                {this.props.addCommaToNum(food.cost)}
              </span>
            </h6>
            <div className="order-buttons">
              <button 
                className="big fluid confirm button"
                onClick={this.addToCart.bind(this, food)}>
                Add to cart
              </button>
            </div>
          </div>
        </li>
      );
    });
  }
  
  render() {
    return (
      <ul className="horizontal list">
        {this.renderMenu()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { menu: state.menu };
};

export default connect(mapStateToProps, { fetchMenu, addToCart })(MenuList);
