import { ADD_TO_CART } from '../actionTypes';

const addToCart = (foodObject) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: foodObject,
    })
  };
}

export default addToCart;
