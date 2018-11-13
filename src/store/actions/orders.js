import { FETCH_USER_ORDERS } from '../actionTypes';
import { apiCall } from '../../services/api';
import jwtDecode from 'jwt-decode';
import { addError } from './errors';

export const fetchUserOrders = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      return dispatch(addError('You need to be logged in to view orders'));
    }
    const { id } = jwtDecode(token);
    const config = {
      url: `/users/${id}/orders`,
      method: 'get',
      headers: { 'Authorization': `Bearer ${token}` }
    }
    
    return new Promise((resolve) => {
      const request = apiCall(config);
      request.then(({ result }) => {
        dispatch({
          type: FETCH_USER_ORDERS,
          payload: result
        });
        resolve();
      })
      .catch((err) => {
        dispatch(addError(err));
      })
    })
    
  }
}
