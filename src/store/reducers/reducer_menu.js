import _ from 'lodash';
import { FETCH_MENU } from '../actionTypes';

const fetchMenu = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MENU:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
};

export default fetchMenu;
