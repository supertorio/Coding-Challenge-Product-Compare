import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { showProduct, hideProduct } from '../../actions/productActions'
import StyledCheckbox from '../user-controls/StyledCheckbox'

const FilterHeader = styled.h2`
  color:  ${props => props.theme.colors.blue};
  font-family: ${props => props.theme.fonts.headers}
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.large};
`

const FiltersList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const FiltersListItem = styled.li`
  position: relative;
  font-weight: ${props => props.theme.fontWeights.bold};
  padding: 0 0 1.5rem 30px;
  line-height: 1.2rem;
`

function ProductFilter({
  products,
  filteredProducts,
  showProduct,
  hideProduct
}) {
  const handleChange = productNumber => {
    if (filteredProducts.includes(productNumber)) {
      showProduct(productNumber)
    } else {
      hideProduct(productNumber)
    }
  }

  return (
    <Fragment>
      <FilterHeader>Je selectie</FilterHeader>
      <FiltersList>
        {products.map(p => (
          <FiltersListItem key={p.Artikelnummer}>
            <StyledCheckbox
              checked={!filteredProducts.includes(p.Artikelnummer)}
              onChange={e => handleChange(p.Artikelnummer)}
              text={p.name}
            />
          </FiltersListItem>
        ))}
      </FiltersList>
    </Fragment>
  )
}

const mapDispatchToProps = {
  showProduct,
  hideProduct
}

export default connect(null, mapDispatchToProps)(ProductFilter)
