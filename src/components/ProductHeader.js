import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { removeProduct } from '../actions/productActions'

const Container = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 30px;
`

const ProductImage = styled.img`
  width: 100%;
  max-width: 240px;
`

const ProductName = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #005ca9;
`

const ProductPrice = styled.h3`
  font-family: 'Nunito Sans', sans-serif;
  line-height: 1em;
  margin-bottom: 0;
  font-size: 1.2em;
`

const ProductPriceDetails = styled.h4`
  font-size: 0.9em;
  color: #676767;
  margin-top: 0;
`

const RemoveProductButton = styled.button`
  border: 0;
  padding: 8px;
  font-size: 1.2rem;
  color: #005ca9;
  float: right;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`

function ProductHeader({ product, removeProduct }) {
  return (
    <Container>
      <div>
        <RemoveProductButton
          onClick={() => removeProduct(product.Artikelnummer)}
          title="Remove Product from compare table"
        >
          <FontAwesomeIcon icon="trash-alt" />
        </RemoveProductButton>
      </div>
      <ProductImage src={product.productImage} alt="Product" />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.listPrice}</ProductPrice>
      <ProductPriceDetails>
        per {product.uom.toLowerCase()} / exel. btw
      </ProductPriceDetails>
    </Container>
  )
}

const mapDispatchToProps = {
  removeProduct
}

export default connect(null, mapDispatchToProps)(ProductHeader)
