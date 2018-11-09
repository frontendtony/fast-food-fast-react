import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

export const addError = (error) => {
  return {
    type: ADD_ERROR,
    payload: error
  }
}

export const removeError = () => {
  return {
    type: REMOVE_ERROR,
    payload: ''
  }
}
