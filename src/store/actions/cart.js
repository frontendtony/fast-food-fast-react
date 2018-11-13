import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from '../actionTypes';
import { addError } from './errors';
import { apiCall } from '../../services/api';
import _ from 'lodash';

export const addToCart = (foodObject) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: foodObject
    });
  };
}

export const removeFromCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id
    });
  }
}

export const emptyCart = () => {
  return (dispatch) => {
    dispatch({
      type: EMPTY_CART
    });
  }
}

export const checkout = (cart, address = '') => {
  return (dispatch) => {
    const foodIds = _.keys(cart);
    const data = { foodIds, address };
    const { token } = localStorage;
    if (!token) return addError('You need to be logged in to place an order');
    const config = {
      url: `/orders`,
      method: 'post',
      headers: { 'Authorization': `Bearer ${token}` },
      data
    }
    
    return new Promise((resolve, reject) => {
      const request = apiCall(config);
      request.then(() => {
        dispatch(emptyCart());
        resolve();
      })
      .catch((err) => {
        dispatch(addError(err));
      })
    })
  }
}

// dispatch({
//   type: CHECKOUT
// });