import React from 'react'
import styled from 'styled-components'

const GridCell = styled.div`
  flex: 0 1 ${props => `${80 / props.oneOfNum}%`};
  padding: 8px;
  font-weight: ${props => props.theme.fontWeights.medium}

  &:last-child {
    padding-right: 0;
  }

  @media (max-width: 900px) {
    border-right: 0;
    flex: 0 0 100%;

    &:last-child {
      padding-right: 8px;
    }
  }
`

const RowHeaderGridCell = styled(GridCell)`
  flex: 0 1 20%;
  border-right: ${props => `1px solid ${props.theme.colors.tableBorder}`};

  @media (max-width: 900px) {
    padding-top: 20px;
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`

const ColumnHeaderGridCell = styled(GridCell)``

const DataGridCell = styled(GridCell)`
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (max-width: 900px) {
    display: flex;
    font-weight: ${props => props.theme.fontWeights.medium};

    span {
      flex: 0 0 50%;
      text-align: right;
    }

    &:before {
      flex: 0 0 50%;
      display: block;
      content: attr(data-product);
    }
  }
`

const Badge = styled.img`
  width: 30px;
  margin-right: 5px;
`

/**
 * Specialty helper cell for rendering product badges
 * @param {obj} props
 */
export const CompareGridBadgesCell = props => {
  const cellContents = props.badges.split('|').map((b, i) => {
    return <Badge key={i} src={b} alt="badge" />
  })
  return (
    <DataGridCell
      data-product={props.productName}
      oneOfNum={props.productCount}
    >
      <span>{cellContents}</span>
    </DataGridCell>
  )
}

export const CompareGridDataCell = props => {
  return (
    <DataGridCell
      data-product={props.productName}
      oneOfNum={props.productCount}
    >
      <span>{props.children}</span>
    </DataGridCell>
  )
}

export const CompareGridRowHeaderCell = props => {
  return <RowHeaderGridCell>{props.children}</RowHeaderGridCell>
}

export const CompareGridColumnHeaderCell = props => {
  return (
    <ColumnHeaderGridCell oneOfNum={props.productCount}>
      {props.children}
    </ColumnHeaderGridCell>
  )
}
