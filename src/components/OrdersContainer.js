import React, { Component } from 'react';
import _ from 'lodash';
import OrderCard from '../components/OrderCard';
import OrdersHeader from '../components/OrdersHeader';

class OrdersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'processing'
    }

    this.onSelectChange = this.onSelectChange.bind(this);
    this.renderOrders = this.renderOrders.bind(this);
  }

  onSelectChange(e) {
    this.setState({
      filter: e.target.value
    })
  }

  renderOrders() {
    const { orders } = this.props;
    return _.map(orders, (order) => {
      return(
        <OrderCard order={order} key={order.id} />
      );
    })
  }

  render() {
    const { filter } = this.state;
    return (
      <div className="raised orders-container">
        <OrdersHeader filter={filter} onSelectChange={this.onSelectChange}/>
        <ul className="orders">
          {this.renderOrders()}
        </ul>
      </div>
    );
  }
};

export default OrdersContainer;
