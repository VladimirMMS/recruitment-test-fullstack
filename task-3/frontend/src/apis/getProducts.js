import { getToken } from "../helpers/token"

export function getProducts() {
  const url= process.env.REACT_APP_BACKEND_URL
    return fetch(url+'/product/all', {
        method: 'GET',
        headers: {
          Authorization: getToken()
        }
      })
}