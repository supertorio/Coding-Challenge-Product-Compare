import { combineReducers } from 'redux-immutable'
import products, * as productsSelector from './products-reducer'

const rootReducer = combineReducers({
  products
})

export default rootReducer

// Selector Pattern Accessors
export const getProductsLoading = state =>
  productsSelector.selectProductsLoading(state.get('products'))
export const getProducts = state =>
  productsSelector.selectProducts(state.get('products'))
