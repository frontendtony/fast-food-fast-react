import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import CartList from '../components/CartList';
import CartFooter from '../components/CartFooter';
import { removeFromCart, emptyCart, checkout } from '../store/actions/cart';

class Cart extends Component {
  render() {
    const { cart, removeFromCart, emptyCart, addCommaToNum, checkout } = this.props;
    const total = _.reduce(cart, (acc, curr) => acc + curr.cost, 0);
    const count = _.keys(cart).length;
    
    return (
      <div className='small section'>
        <CartList
          cart={cart}
          addCommaToNum={addCommaToNum}
          removeFromCart={removeFromCart}
        />
        
        { !!count
          ?
            <CartFooter
              cart={cart}
              total={total}
              addCommaToNum={addCommaToNum}
              emptyCart={emptyCart}
              checkout={checkout}
            />
          : <p>You currently do not have any items in your cart</p>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, { removeFromCart, emptyCart, checkout })(Cart);
