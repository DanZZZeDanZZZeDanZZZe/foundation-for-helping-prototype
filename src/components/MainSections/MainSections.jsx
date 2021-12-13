import React from 'react'
import styled from 'styled-components'
import { SMALL_DEVICES_BREAKPOINT } from '../../common/constants'
import section1 from './section1.jpeg'

const mockData = [
  {
    title: 'Помощь семьям',
    img: section1,
  },
  {
    title: 'Помощь детским организациям',
    img: section1,
  },
  {
    title: 'Развлечение и обучение',
    img: section1,
  },
  {
    title: 'Специализированное оборудование',
    img: section1,
  },
]

const StyledContainer = styled.div`
  min-height: 30rem;
  padding: 7rem var(--side-padding) 4rem;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  @media ${SMALL_DEVICES_BREAKPOINT} {
    padding: 1rem 0;
  }
`

const StyledSection = styled.div`
  font-size: 1.2rem;
  background-color: var(--color3);
  color: white;
  font-weight: bolder;
  flex-basis: 20rem;
  margin: 0.5rem;
  flex-grow: 1;
  max-width: 25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    box-shadow: var(--shadow-1);
  }

  @media ${SMALL_DEVICES_BREAKPOINT} {
    width: 100%;
  }
`

const StyledHeader = styled.h4`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const StyledImg = styled.img`
  object-fit: cover;
  height: 30rem;
  width: 100%;
`

const MainSections = (props) => {
  return (
    <StyledContainer>
      {mockData.map((section) => (
        <StyledSection>
          <StyledHeader>{section.title}</StyledHeader>
          <StyledImg src={section.img} alt={section.title} />
        </StyledSection>
      ))}
    </StyledContainer>
  )
}

export default MainSections
