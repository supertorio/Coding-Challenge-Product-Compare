import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoadingContainer = styled.div`
  color: ${props => props.theme.colors.blue};
  font-family: ${props => props.theme.fonts.headers}
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.extraLarge};
  text-align: center;
`

function LoadingIndicator({ message }) {
  return (
    <LoadingContainer>
      {message} <FontAwesomeIcon icon={['fas', 'spinner']} spin />
    </LoadingContainer>
  )
}

export default LoadingIndicator
