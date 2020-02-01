import * as actionTypes from './actionTypes'
import { fetchProducts } from '../providers/appProviders'

export const loadProducts = () => dispatch => {
  dispatch({ type: actionTypes.UPDATE_LOAD_PRODUCTS_STATUS, loading: true })
  return fetchProducts()
    .then(results => {
      dispatch({ type: actionTypes.LOAD_PRODUCTS, products: results.products })
    })
    .catch(e => {
      //TODO: Handle Errors
      dispatch({
        type: actionTypes.UPDATE_LOAD_PRODUCTS_STATUS,
        loading: false
      })
    })
}

export const hideProduct = productNumber => dispatch => {
  return dispatch({ type: actionTypes.HIDE_PRODUCT, productNumber })
}

export const showProduct = productNumber => dispatch => {
  return dispatch({ type: actionTypes.SHOW_PRODUCT, productNumber })
}

export const removeProduct = productNumber => dispatch => {
  return dispatch({ type: actionTypes.REMOVE_PRODUCT, productNumber })
}
