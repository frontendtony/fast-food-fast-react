import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserOrders } from '../store/actions/orders';
import FoodListContainer from '../components/FoodListContainer';
import OrdersContainer from '../components/OrdersContainer';

class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOrder: ''
    }

    this.setSelectedOrder = this.setSelectedOrder.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserOrders();
  }

  setSelectedOrder(order) {
    this.setState({
      selectedOrder: order
    })
  }

  render() {
    const { orders } = this.props;
    const { selectedOrder } = this.state;
    return (
      <div className="order-section">
        <OrdersContainer orders={orders} setSelectedOrder={this.setSelectedOrder} />
        <FoodListContainer selectedOrder={selectedOrder} />
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
