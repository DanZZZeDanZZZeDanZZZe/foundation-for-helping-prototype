import React, { useState } from 'react'
import styled from 'styled-components'
import RightNav from './RightNav'

const StyledBurgerMenu = styled.button`
  border: none;
  background: transparent;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? 'var(--color2)' : 'var(--font-color-white)'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
const StyledShadow = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: black;
  scroll-y: none;
  opacity: ${({ open }) => (open ? '0.6' : '0')};
  z-index: ${({ open }) => (open ? '-1' : '10')};
  transition: all 0.5s linear;
`

const BurgerMenu = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurgerMenu
        type="button"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurgerMenu>
      <RightNav open={open}>{children}</RightNav>
      <StyledShadow open={open} />
    </>
  )
}

export default BurgerMenu
