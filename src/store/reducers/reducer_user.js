import { SET_CURENT_USER, REMOVE_USER } from '../actionTypes';
import jwtDecode from 'jwt-decode';

const { token } = localStorage;
const defaultUser = !!token
  ? {
      isLoggedIn: true,
      user: jwtDecode(localStorage.token)
    }
  : {
      isLoggedIn: false,
      user: {}
    };

export default (state = defaultUser, action) => {
  switch (action.type) {
    case SET_CURENT_USER:
      const token = action.payload;
      localStorage.setItem('token', token);
      return {
        isLoggedIn: true,
        user: jwtDecode(token)
      }
    case REMOVE_USER:
      localStorage.removeItem('token');
      return {
        isLoggedIn: false,
        user: {}
      }
    default:
      return state;
  }
}
