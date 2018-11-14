import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserOrders } from '../store/actions/orders';
import FoodListContainer from '../components/FoodListContainer';
import OrdersContainer from '../components/OrdersContainer';

class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOrder: '',
      modalClass: ''
    }

    this.setSelectedOrder = this.setSelectedOrder.bind(this);
    this.removeModal = this.removeModal.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserOrders();
  }

  setSelectedOrder(order) {
    this.setState({
      selectedOrder: order,
      modalClass: 'food-list-modal'
    })
  }

  removeModal() {
    this.setState({
      modalClass: ''
    })
  }

  render() {
    const { orders } = this.props;
    const { selectedOrder, modalClass } = this.state;
    return (
      <div className="order-section">
        <OrdersContainer
          orders={orders}
          setSelectedOrder={this.setSelectedOrder}
        />
        <FoodListContainer 
          selectedOrder={selectedOrder}
          modalClass={modalClass}
          removeModal={this.removeModal}
        />
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
