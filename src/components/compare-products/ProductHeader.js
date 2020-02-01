import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { removeProduct } from '../../actions/productActions'

const Container = styled.div`
  border-bottom: ${props => `1px solid ${props.theme.colors.tableBorder}`};
  padding-bottom: 15px;
  margin-bottom: 30px;
`

const ProductImage = styled.img`
  width: 100%;
  max-width: 240px;
`

const ProductName = styled.h2`
  font-family: ${props => props.theme.fonts.headers};
  font-size: ${props => props.theme.fontSizes.default};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.blue};
`

const ProductPrice = styled.h3`
  font-family: ${props => props.theme.fonts.headers}
  line-height: 1rem;
  margin-bottom: 0;
  font-size: ${props => props.theme.fontSizes.medium};
`

const ProductPriceDetails = styled.h4`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.darkGrey};
  margin-top: 0;
`

const RemoveProductButton = styled.button`
  border: 0;
  padding: 8px;
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.blue};
  float: right;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.default};
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
