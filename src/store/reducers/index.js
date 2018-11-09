import { combineReducers } from 'redux';
import MenuReducer from './reducer_menu';
import CartReducer from './reducer_cart';
import errorHandler from './reducer_error';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
  menu: MenuReducer,
  cart: CartReducer,
  error: errorHandler,
  currentUser: UserReducer
});

export default rootReducer;
