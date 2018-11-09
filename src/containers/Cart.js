import React, { Component } from 'react';
import CartList from './CartList';
import CartFooter from '../components/CartFooter';
import { connect } from 'react-redux';
import _ from 'lodash';

class Cart extends Component {
  render() {
    const total = _.reduce(this.props.cart, (acc, curr) => acc + curr.cost, 0);
    const count = _.keys(this.props.cart).length;

    return (
      <div className='small section'>
        <CartList cart={this.props.cart} x={this.props.addCommaToNum} />
        
        { !!count
          ?
            <CartFooter 
              total={total}
              x={this.props.addCommaToNum} />
          : <p>You currently do not have any items in your cart</p>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(Cart);
