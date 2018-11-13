import { apiCall } from '../../services/api';
import { FETCH_MENU } from '../actionTypes';
import { removeError, addError } from './errors';

const fetchMenu = ({search = '', limit = 10, offset = 0} = {}) => {  
  const config = {
    method: 'get',
    url: '/menu',
    params: { search, limit, offset }
  }

  const request = apiCall(config);

  return (dispatch) => {
    request.then(({ result }) => {
      dispatch({
        type: FETCH_MENU,
        payload: result,
      })
      dispatch(removeError());
    })
    .catch(() => {
      dispatch(addError('Could not retrieve menu, please try again'));
    })
  };
}

export default fetchMenu;
