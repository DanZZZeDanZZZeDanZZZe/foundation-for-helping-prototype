import React from 'react'
import styled from 'styled-components'

const StyledUl = styled.ul`
  margin-top: 0;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 15;
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  box-shadow: var(--shadow-1);
  li {
    padding: 18px 10px;
    font-weight: bold;
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--color6);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`

const RightNav = ({ open, children }) => {
  return (
    <StyledUl open={open}>
      {children.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </StyledUl>
  )
}

export default RightNav
