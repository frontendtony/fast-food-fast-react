import axios from 'axios';

export const setTokenHeader = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export const apiCall = (axiosConfigObj) => {
  const config = {
    ...axiosConfigObj,
    baseURL: 'https://fast-food-fast-adc.herokuapp.com/api/v1'
  }
  return new Promise((resolve, reject) => {
    return axios(config)
      .then((res) => { 
        return resolve(res.data);
      })
      .catch((err) => {
        const { response, request, message } = err;
        const error = response ? response.data.message
          : request ? 'Network error, please try again later' : message;
        return reject(error);
      })
  })
}
