import { ERROR } from '../actionTypes';

const errorHandler = (state = { message: '' }, action) => {
  switch (action.type) {
    case ERROR:
      return action.payload;
    default:
      return state;
  }
}

export default errorHandler;
