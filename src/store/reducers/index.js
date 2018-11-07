import { combineReducers } from 'redux';
import MenuReducer from './reducer_menu';
import CartReducer from './reducer_cart';
import errorHandler from './reducer_error';

const rootReducer = combineReducers({
  menu: MenuReducer,
  cart: CartReducer,
  error: errorHandler
});

export default rootReducer;
