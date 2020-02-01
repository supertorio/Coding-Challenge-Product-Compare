import { combineReducers } from 'redux-immutable'
import products, * as productsSelectors from './products-reducer'

const rootReducer = combineReducers({
  products
})

export default rootReducer

// Selector Pattern Accessors
export const getProductsLoading = state =>
  productsSelectors.selectProductsLoading(state.get('products'))
export const getProducts = state =>
  productsSelectors.selectProducts(state.get('products'))
export const getFilteredProducts = state =>
  productsSelectors.selectFilteredProducts(state.get('products'))
