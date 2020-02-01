import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { showProduct, hideProduct } from '../actions/productActions'

const FilterHeader = styled.h2`
  color: #005ca9;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
`

const FiltersList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const FiltersListItem = styled.li`
  position: relative;
  font-weight: bold;
  padding-left: 30px;
  line-height: 1.5rem;

  input[type='checkbox'] {
    position: absolute;
    left: 0;
  }
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
            <input
              type="checkbox"
              checked={!filteredProducts.includes(p.Artikelnummer)}
              onChange={e => handleChange(p.Artikelnummer)}
            />
            {p.name}
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
