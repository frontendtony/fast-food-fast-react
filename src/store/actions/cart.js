import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from '../actionTypes';

export const addToCart = (foodObject) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: foodObject,
    })
  };
}

export const removeFromCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id
    })
  }
}

export const emptyCart = () => {
  return dispatch => {
    dispatch({
      type: EMPTY_CART
    })
  }
}