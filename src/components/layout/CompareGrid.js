import React from 'react'
import styled from 'styled-components'

const GridContainer = styled.div`
  margin: 0 15px;
`

const GridRow = styled.div`
  display: flex;
  border-top: ${props => (props.noBorder ? 'none' : '1px solid #ccc')};
  align-items: stretch;
`

const GridCell = styled.div.attrs(props => ({
  fontWeight: props[COMPARE_GRID_CELL_TYPES.DATA_CELL] ? 800 : 500
}))`
  flex: 0 1 20%;
  padding: 8px;
  font-weight: ${props => props.fontWeight};

  &:first-child {
    border-right: 1px solid #ccc;
  }

  &:last-child {
    padding-right: 0;
  }
`

const Badge = styled.img`
  width: 30px;
  margin-right: 5px;
`

export const COMPARE_GRID_CELL_TYPES = {
  ROW_HEADER: 'rowHeader',
  COL_HEADER: 'colHeader',
  DATA_CELL: 'dataCell',
  BADGES_CELL: 'badgesCell'
}

export const CompareGrid = props => (
  <GridContainer>{props.children}</GridContainer>
)

export const CompareGridRow = props => (
  <GridRow noBorder={props.noBorder || false}>{props.children}</GridRow>
)

// Converts the type prop value type into a prop key for the styled component
export const CompareGridCell = props => (
  <GridCell {...{ [props.type]: true }}>{props.children}</GridCell>
)

/**
 * Specialty helper cell for rendering product badges
 * @param {obj} props
 */
export const CompareGridBadgesCell = props => {
  const cellContents = props.badges.split('|').map((b, i) => {
    return <Badge key={i} src={b} alt="badge" />
  })
  return (
    <GridCell type={COMPARE_GRID_CELL_TYPES.BADGES_CELL}>
      {cellContents}
    </GridCell>
  )
}
