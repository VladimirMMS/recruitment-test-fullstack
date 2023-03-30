import {getToken} from '../helpers/token'

export function createProduct(body) {
  const url= process.env.REACT_APP_BACKEND_URL
    return fetch(url+'/product/create', {
        method: 'POST',
        headers: {
          Authorization: getToken()
        },
        body: body,
      })
    
}