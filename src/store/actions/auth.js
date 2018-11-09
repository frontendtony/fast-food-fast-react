import { apiCall } from '../../services/api';
import { removeError, addError } from './errors';
import { SET_CURENT_USER, REMOVE_USER } from '../actionTypes';
import { history } from '../../helpers';

export const setCurrentUser = (token) => {
  return {
    type: SET_CURENT_USER,
    payload: token
  }
}

export const deleteUser = () => {
  return {
    type: REMOVE_USER
  }
}

export const authUser = (userData, type = 'login') => {
  return (dispatch) => {
    const config = {
      url: `/auth/${type}`,
      method: 'post',
      data: userData
    }
    return new Promise((resolve, reject) => {
      const request = apiCall(config);
      request.then(({ token }) => {
        dispatch(setCurrentUser(token));
        dispatch(removeError());
        resolve();
      })
      .catch((err) => {
        const { response, request, message } = err;
        const error = response ? response.data.message
          : request ? 'Network error, please try again later' : message
        dispatch(addError(error));
      })
    });
  }
}

export const logout = () => {
  return dispatch => {
    return Promise.resolve(
      dispatch(deleteUser())
    )
    .then(() => history.push('/login'))
  }
}
