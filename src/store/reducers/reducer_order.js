import { FETCH_USER_ORDERS } from '../actionTypes';
import _ from 'lodash';

const orders = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_ORDERS:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
}

export default orders;
