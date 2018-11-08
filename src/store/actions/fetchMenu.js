import apiCall from '../../services/api';
import { FETCH_MENU, ERROR } from '../actionTypes';

const fetchMenu = ({search = '', limit = 10, offset = 0} = {}) => {  
  const config = {
    method: 'get',
    url: 'https://fast-food-fast-adc.herokuapp.com/api/v1/menu',
    params: {
      search,
      limit,
      offset
    }
  }

  const request = apiCall(config);

  return (dispatch) => {
    request.then((data) => {
      dispatch({
        type: FETCH_MENU,
        payload: data,
      })
    })
    .catch(() => {
      dispatch({
        type: ERROR,
        payload: {
          message: 'Could not retrieve menu, please try again'
        }
      })
    })
  };
}

export default fetchMenu;
