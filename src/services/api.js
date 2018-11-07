import axios from 'axios';

const apiCall = (method, path, payload) => {
  return new Promise((resolve, reject) => {
    return axios[method](path, payload)
      .then((res) => { 
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err);
      })
  })
}

export default apiCall;
