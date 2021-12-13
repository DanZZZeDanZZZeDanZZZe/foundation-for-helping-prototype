import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from '@react-hook/media-query'
import {
  MEDIUM_DEVICES_BREAKPOINT,
  SMALL_DEVICES_BREAKPOINT,
} from '../../common/constants'
import HeaderNavMenu from './HeaderNavMenu'
import logo from './logo.png'
import BurgerMenu from './BurgerMenu'

const mockData = {
  logo: {
    alt: 'исполнение мечты',
  },
  buttons: [
    'новости',
    'наши подопечные',
    'обратиться за\xa0  помощью',
    'пожертвовать',
    'о\xa0фонде',
    'отчёты',
  ],
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--side-padding);
  height: 8rem;
  background: var(--color2);
  border-bottom: 0.4rem solid var(--color5);

  @media ${SMALL_DEVICES_BREAKPOINT} {
    padding: 0 var(--side-padding-mobile);
    height: 6rem;
  }
`

const StyledIcon = styled.img`
  object-fit: contain;
  max-width: 10rem;
  height: 95%;
`

function Header() {
  const { buttons } = mockData
  const isSmallDevice = useMediaQuery(MEDIUM_DEVICES_BREAKPOINT)
  const Content = !isSmallDevice ? HeaderNavMenu : BurgerMenu

  return (
    <StyledHeader>
      <StyledIcon src={logo} alt={mockData.logo.alt} />
      <Content>{buttons}</Content>
    </StyledHeader>
  )
}

export default Header
