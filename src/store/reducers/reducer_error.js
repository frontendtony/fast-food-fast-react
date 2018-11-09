import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

const errorHandler = (state = '', action) => {
  switch (action.type) {
    case ADD_ERROR:
      return action.payload;
    case REMOVE_ERROR:
      return action.payload;
    default:
      return state;
  }
}

export default errorHandler;
