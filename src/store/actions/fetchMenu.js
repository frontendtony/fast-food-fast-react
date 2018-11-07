import apiCall from '../../services/api';
import { FETCH_MENU, ERROR } from '../actionTypes';

const fetchMenu = ({search = '', limit = 10, offset = 0} = {}) => {
  const url = 'https://fast-food-fast-adc.herokuapp.com/api/v1/menu';
  const params = `?search=${search}&limit=${limit}&offset=${offset}`
  const request = apiCall('get', `${url}${params}`);

  return (dispatch) => {
    request.then((data) => {
      dispatch({
        type: FETCH_MENU,
        payload: data,
      })
    })
    .catch((err) => {
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
