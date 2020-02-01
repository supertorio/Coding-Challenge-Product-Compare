import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { loadProducts } from '../../actions/productActions'
import {
  getProductsLoading,
  getProducts,
  getFilteredProducts
} from '../../reducers/index-reducer'
import LoadingIndicator from '../LoadingIndicator'
import CompareProducts from '../compare-products/CompareProducts'
import Theme from '../theme'

const AppContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto 150px;
  padding: 15px;
`

function App({ loading, products, filteredProducts, loadProducts }) {
  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  return (
    <Theme>
      <AppContainer>
        {loading && <LoadingIndicator message="Loading Products" />}
        {products.size > 0 && (
          <CompareProducts
            products={products}
            filteredProducts={filteredProducts}
          />
        )}
      </AppContainer>
    </Theme>
  )
}

const mapStateToProps = state => {
  return {
    loading: getProductsLoading(state),
    products: getProducts(state),
    filteredProducts: getFilteredProducts(state)
  }
}

const mapDispatchToProps = {
  loadProducts: loadProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
