import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchUserOrders } from '../store/actions/orders';
import OrdersHeader from '../components/OrdersHeader';
import OrderCard from '../components/OrderCard';
import FoodListContainer from '../components/FoodListContainer';

class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'new'
    }

    this.onSelectChange = this.onSelectChange.bind(this);
    this.renderOrders = this.renderOrders.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserOrders();
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
      <div className="order-section">
        <div className="raised orders-container">
          <OrdersHeader filter={filter} onSelectChange={this.onSelectChange}/>
          <ul className="orders">
            {this.renderOrders()}
          </ul>
        </div>
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
