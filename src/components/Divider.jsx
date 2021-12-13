import React from 'react'

import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`

const StyledContainerReversed = styled(StyledContainer)`
  transform: rotateZ(180deg);
`

const Divider = ({ topColor, bottomColor, reversed }) => {
  const [Container, tColor, bColor] = reversed
    ? [StyledContainerReversed, bottomColor, topColor]
    : [StyledContainer, topColor, bottomColor]

  return (
    <Container>
      <svg
        viewBox="0 0 800 100"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="100%" height="100%" fill={bColor} />
        <path
          fill={tColor}
          opacity="undefined"
          d="M400.657 100C113.364 100-120 55.472-120 .5S112.707-99 400-99 920-54.472 920 .5 687.95 100 400.657 100z"
          filter="url(#a)"
        />
        <defs>
          <filter id="a">
            <feGaussianBlur in="SourceGraphic" />
          </filter>
        </defs>
      </svg>
    </Container>
  )
}

export default Divider
