import React from 'react'
import styled from 'styled-components'

const GridContainer = styled.div`
  margin: 0 15px;
  box-sizing: border-box;
`

export const CompareGrid = props => (
  <GridContainer>{props.children}</GridContainer>
)

export default CompareGrid
