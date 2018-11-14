import React, { Component } from 'react';
import _ from 'lodash';
import FoodCard from '../components/FoodCard';

class FoodListContainer extends Component {
  renderFoodCard() {
    const { selectedOrder } = this.props;
    if (!selectedOrder) {
      return (
        <p className="food-list-placeholder">
          Select an order to view the food details
        </p>
      )
    }
    const { foodList, order_status } = selectedOrder;
    return _.map(foodList, (food) => {
      return(
      <FoodCard food={food} key={food.id} status={order_status} />
      );
    })
  }
  render() {
    const { modalClass } = this.props;
    const { selectedOrder, removeModal } = this.props;
    return (
      <div className={`raised food-list-container ${modalClass}`}>
        { selectedOrder 
          ? <div className="food-list-close-button" onClick={removeModal}>
              <span>close  </span> 
              <i className="fa fa-times"></i>
            </div>
          : null
        }
        <ul className="food-list">
          {this.renderFoodCard()}
        </ul>
      </div>
    );
  }
};

export default FoodListContainer;
