import axios from 'axios';

const apiCall = (axiosConfigObj) => {
  return new Promise((resolve, reject) => {
    return axios(axiosConfigObj)
      .then((res) => { 
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err);
      })
  })
}

export default apiCall;
