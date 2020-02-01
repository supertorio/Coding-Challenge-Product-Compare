import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  display: inline-block;
  input {
    display: none;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.blue};
  font-size: ${props => props.theme.fontSizes.medium};
  position: absolute;
  left: 0;
  top: 3px;
`

function StyledCheckbox({ checked, onChange, text }) {
  return (
    <Container>
      <label>
        <StyledIcon
          icon={checked ? ['fas', 'check-square'] : ['far', 'square']}
        />
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span>{text}</span>
      </label>
    </Container>
  )
}

export default StyledCheckbox
