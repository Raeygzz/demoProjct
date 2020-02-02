const url = 'http://192.168.88.43:3000/api';

export const signup = (method = {}, body = {}) => fetch(url + '/userAuth/createAccount', {
  method: method,
  headers: {
    'Content-Type': 'application/json'
  },
  body: body
})
