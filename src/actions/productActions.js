import * as actionTypes from './actionTypes'

export const loadProducts = () => dispatch => {
  dispatch({ type: actionTypes.UPDATE_LOAD_PRODUCTS_STATUS, loading: true })
  // TODO: Replace with provider method call
  setTimeout(() => {
    dispatch({ type: actionTypes.LOAD_PRODUCTS, products: {} })
  }, 3000)
}
