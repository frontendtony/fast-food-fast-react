import { combineReducers } from 'redux';
import MenuReducer from './reducer_menu';
import CartReducer from './reducer_cart';
import errorHandler from './reducer_error';
import UserReducer from './reducer_user';
import OrderReducer from './reducer_order';

const rootReducer = combineReducers({
  menu: MenuReducer,
  cart: CartReducer,
  error: errorHandler,
  currentUser: UserReducer,
  orders: OrderReducer
});

export default rootReducer;
