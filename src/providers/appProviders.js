const PRODUCTS_ENDPOINT =
  'http://5c35e7f96fc11c0014d32fcd.mockapi.io/compare/products'

export const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    fetch(PRODUCTS_ENDPOINT)
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
