import { API_HOST } from '../constants/config'

// Fetch API is polyfilled for IE11
// Wrapped in a promise to keep the provider api to
// clean success or fail responses.
export const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}compare/products`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        resolve(json)
      })
      .catch(e => {
        reject(e)
      })
  })
}
