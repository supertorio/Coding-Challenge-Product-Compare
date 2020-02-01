import { Map, List } from 'immutable'
import * as actionTypes from '../actions/actionTypes'

export const defaultState = Map({
  productsLoading: false,
  products: List(),
  filteredProducts: List()
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LOAD_PRODUCTS_STATUS:
      return state.set('productsLoading', action.loading)
    case actionTypes.LOAD_PRODUCTS:
      return state
        .set('products', List(action.products))
        .set('productsLoading', defaultState.get('productsLoading'))
    case actionTypes.HIDE_PRODUCT:
      return state.set(
        'filteredProducts',
        state.get('filteredProducts').push(action.productNumber)
      )
    case actionTypes.SHOW_PRODUCT:
      const filterIndex = state
        .get('filteredProducts')
        .indexOf(action.productNumber)
      return filterIndex >= 0
        ? state.set(
            'filteredProducts',
            state.get('filteredProducts').remove(filterIndex)
          )
        : state
    case actionTypes.REMOVE_PRODUCT:
      return state.set(
        'products',
        state
          .get('products')
          .filter(p => p.Artikelnummer !== action.productNumber)
      )
    default:
      return state
  }
}

// State Selectors
export const selectProductsLoading = state => state.get('productsLoading')
export const selectProducts = state => state.get('products')
export const selectFilteredProducts = state => state.get('filteredProducts')
