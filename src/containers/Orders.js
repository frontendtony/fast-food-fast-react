import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserOrders } from '../store/actions/orders';
import FoodListContainer from '../components/FoodListContainer';
import OrdersContainer from '../components/OrdersContainer';

class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOrder: {}
    }
  }

  componentWillMount() {
    this.props.fetchUserOrders();
  }

  render() {
    const { orders } = this.props;
    return (
      <div className="order-section">
        <OrdersContainer orders={orders} />
        <FoodListContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

export default connect(mapStateToProps, { fetchUserOrders })(Orders);
