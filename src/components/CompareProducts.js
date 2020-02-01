import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  CompareGrid,
  CompareGridRow,
  CompareGridCell,
  CompareGridBadgesCell,
  COMPARE_GRID_CELL_TYPES
} from './layout/CompareGrid'
import ProductsFilter from './ProductsFilter'
import ProductHeader from './ProductHeader'
import { FIELDS_COMPARE_EXCLUDE } from '../constants/config'

const CompareContainer = styled.div`
  text-align: left;
  padding-bottom: 30px;
  border-bottom: 4px solid #005ca9;
`

const CompareHeader = styled.h1`
  color: #005ca9;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 2rem;
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
      <CompareHeader>4 producten vergelijken</CompareHeader>
      <CompareGrid>
        <CompareGridRow>
          <CompareGridCell>
            <ProductsFilter
              products={products}
              filteredProducts={filteredProducts}
            />
          </CompareGridCell>
          {displayedProducts.map(p => (
            <CompareGridCell key={p.Artikelnummer}>
              <ProductHeader product={p} />
            </CompareGridCell>
          ))}
        </CompareGridRow>
        {compareFields.map(f => {
          const keurMarkRow = f === BADGES_DATA_KEY
          return (
            <CompareGridRow noBorder={keurMarkRow} key={f}>
              <CompareGridCell type={COMPARE_GRID_CELL_TYPES.ROW_HEADER}>
                {keurMarkRow ? 'Keurmark' : f}
              </CompareGridCell>
              {displayedProducts.map(p => {
                return keurMarkRow ? (
                  <CompareGridBadgesCell
                    key={`${p.Artikelnummer}_${f}`}
                    badges={p[f]}
                  />
                ) : (
                  <CompareGridCell
                    key={`${p.Artikelnummer}_${f}`}
                    type={COMPARE_GRID_CELL_TYPES.DATA_CELL}
                  >
                    {p[f]}
                  </CompareGridCell>
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
