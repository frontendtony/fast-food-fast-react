import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes';
import _ from 'lodash';

const defaultCart = JSON.parse(localStorage.getItem('cart')) || {};

export const saveCartToStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

const cart = (state = defaultCart, action) => {
  let newState;
  switch (action.type) {
    case ADD_TO_CART:
      newState = { ...state, [action.payload.id]: action.payload};
      saveCartToStorage(newState);
      return newState;
    case REMOVE_FROM_CART:
      newState = _.omit(state, action.payload);
      saveCartToStorage(newState);
      return newState;
    default:
      return state;
  }
}

export default cart;
