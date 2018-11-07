import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes';
import _ from 'lodash';

export const cart = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [action.payload.id]: action.payload};
    case REMOVE_FROM_CART:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}

export default cart;
