import { Map } from 'immutable'
import * as actionTypes from '../actions/actionTypes'

export const defaultState = Map({
  productsLoading: false,
  products: {}
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LOAD_PRODUCTS_STATUS:
      return state.set('productsLoading', action.loading)
    case actionTypes.LOAD_PRODUCTS:
      return state.set('products', action.products)
    default:
      return state
  }
}

// State Selectors
export const selectProductsLoading = state => state.get('productsLoading')
export const selectProducts = state => state.get('products')
