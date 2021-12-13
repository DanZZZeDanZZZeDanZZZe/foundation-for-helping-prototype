import React from 'react'

import styled from 'styled-components'
import { LARGE_DEVICES_BREAKPOINT } from '../../common/constants'

const StyledContainer = styled.nav`
  padding-left: 3rem;
  display: flex;
`
const StyledButton = styled.button`
  font-size: 1rem;
  font-weight: bold;
  color: var(--font-color-white);
  background-color: inherit;
  border: none;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
    color: var(--font-color-grey);
    background: var(--color4);
    transition: all 0.2s ease-in-out;
  }

  @media ${LARGE_DEVICES_BREAKPOINT} {
    font-size: 1.2rem;
  }
`

const StyledPrimaryButton = styled(StyledButton)`
  background: var(--color6);
  color: var(--font-color-white);

  &:hover {
    background: var(--color3);
    color: var(--font-color-white);
  }
`

const HeaderNavMenu = ({ children }) => {
  return (
    <StyledContainer>
      {children.map((text, index) => {
        return index === 3 ? (
          <StyledPrimaryButton>{text}</StyledPrimaryButton>
        ) : (
          <StyledButton>{text}</StyledButton>
        )
      })}
    </StyledContainer>
  )
}

export default HeaderNavMenu
