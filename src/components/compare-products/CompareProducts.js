import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CompareGrid from '../layout/CompareGrid'
import CompareGridRow from '../layout/CompareGridRow'
import {
  CompareGridBadgesCell,
  CompareGridDataCell,
  CompareGridRowHeaderCell,
  CompareGridColumnHeaderCell
} from '../layout/CompareGridCell'
import ProductsFilter from './ProductsFilter'
import ProductHeader from './ProductHeader'
import { FIELDS_COMPARE_EXCLUDE } from '../../constants/config'

const CompareContainer = styled.div`
  text-align: left;
  padding-bottom: 30px;
  border-bottom: ${props => `4px solid ${props.theme.colors.blue}`};
`

const CompareHeader = styled.h1`
  color: ${props => props.theme.colors.blue};
  font-family: ${props => props.theme.fonts.headers}
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.extraLarge};

  @media (max-width: 900px) {
    text-align: center;
  }
`

const BADGES_DATA_KEY = 'badges'

function CompareProducts({ products, filteredProducts }) {
  const [compareFields, setCompareFields] = useState([])
  const [displayedProducts, setDisplayedProducts] = useState([])

  useEffect(() => {
    setCompareFields(
      Object.keys(products.get(0))
        .filter(f => !FIELDS_COMPARE_EXCLUDE.includes(f))
        .sort((a, b) => {
          a = a.toLowerCase()
          b = b.toLowerCase()
          if (a === BADGES_DATA_KEY) return -1 // Always sort badges to the start of the list
          return a === b ? 0 : a > b ? 1 : -1
        })
    )
  }, [products])

  useEffect(() => {
    setDisplayedProducts(
      products.filter(p => filteredProducts.indexOf(p.Artikelnummer) < 0)
    )
  }, [filteredProducts, products])

  return (
    <CompareContainer>
      <CompareHeader>
        {displayedProducts.size} producten vergelijken
      </CompareHeader>
      <CompareGrid>
        <CompareGridRow allowHighlight={false}>
          <CompareGridRowHeaderCell>
            <ProductsFilter
              products={products}
              filteredProducts={filteredProducts}
            />
          </CompareGridRowHeaderCell>
          {displayedProducts.map(p => (
            <CompareGridColumnHeaderCell
              key={p.Artikelnummer}
              productCount={displayedProducts.size}
            >
              <ProductHeader product={p} />
            </CompareGridColumnHeaderCell>
          ))}
        </CompareGridRow>
        {compareFields.map(f => {
          const keurMarkRow = f === BADGES_DATA_KEY
          return (
            <CompareGridRow
              noBorder={keurMarkRow}
              allowHighlight={!keurMarkRow}
              key={f}
            >
              <CompareGridRowHeaderCell productCount={displayedProducts.size}>
                {keurMarkRow ? 'Keurmark' : f}
              </CompareGridRowHeaderCell>
              {displayedProducts.map(p => {
                return keurMarkRow ? (
                  <CompareGridBadgesCell
                    key={`${p.Artikelnummer}_${f}`}
                    badges={p[f]}
                    productCount={displayedProducts.size}
                    productName={p.name}
                  />
                ) : (
                  <CompareGridDataCell
                    key={`${p.Artikelnummer}_${f}`}
                    productCount={displayedProducts.size}
                    productName={p.name}
                  >
                    {p[f]}
                  </CompareGridDataCell>
                )
              })}
            </CompareGridRow>
          )
        })}
      </CompareGrid>
    </CompareContainer>
  )
}

export default CompareProducts
