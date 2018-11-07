import { REMOVE_FROM_CART } from '../actionTypes';

const removeFromCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id
    })
  }
}

export default removeFromCart;
