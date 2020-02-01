import React, { useState } from 'react'
import styled from 'styled-components'

const GridRow = styled.div`
  display: flex;
  border-top: ${props =>
    props.noBorder ? 'none' : `1px solid ${props.theme.colors.tableBorder}`};
  align-items: stretch;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    border-top-width: 2px;
  }

  @media (min-width: 900px) {
    background: ${props =>
      props.highlightRow ? props.theme.colors.tableBorder : 'transparent'};
  }
`

export const CompareGridRow = ({ noBorder, allowHighlight, children }) => {
  const [hovered, setHovered] = useState(false)
  const [selected, setSelected] = useState(false)

  return (
    <GridRow
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setSelected(!selected)}
      noBorder={noBorder || false}
      highlightRow={allowHighlight && (hovered || selected)}
    >
      {children}
    </GridRow>
  )
}

export default CompareGridRow
