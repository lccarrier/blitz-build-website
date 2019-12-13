import styled, { css } from 'styled-components'
import { stripUnit, rgba } from 'polished'

import { media } from './media'
import { greyDark, primaryColor, grey, greyLight } from './colors'
import { animationTime, animationCurve } from './global'

// Font family
export const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

// Font weights
export const fontWeights = {
  regular: 400,
  semiBold: 600,
  bold: 700,
  heavy: 900
}

export const lineHeights = {
  base: 1.5,
  heading: 1.25,
  tight: 1.15
}

// Font sizes
export const fontSizes = {
  regular: '16px',
  small: '14px',
  tiny: '12px'
}

export const H1 = styled.h1`
  font-weight: ${fontWeights.heavy};
  color: ${greyDark};
  line-height: ${lineHeights.tight};
  font-size: 2rem;
  font-family: ${fontFamily};
  margin-bottom: 0.2em;
  ${media.small`font-size: 2.4rem`};
  ${media.medium`font-size: 2.75rem`};
  ${media.large`font-size: 3rem`};
`

export const H2 = styled.h2`
  font-weight: ${fontWeights.bold};
  color: ${greyDark};
  line-height: ${lineHeights.tight};
  font-size: 2rem;
  font-family: ${fontFamily};
  margin-bottom: 0.25em;
  ${media.small`font-size: 2.4rem`};
  ${media.medium`font-size: 2.75rem`};
  ${media.large`font-size: 3.1rem`};
`

export const H3 = styled.h3`
  font-weight: ${fontWeights.bold};
  color: ${greyDark};
  line-height: ${lineHeights.heading};
  font-size: 1.5rem;
  font-family: ${fontFamily};
  margin-bottom: 0.25em;
  ${media.small`font-size: 1.7rem`};
  ${media.medium`font-size: 1.9rem`};
  ${media.large`font-size: 2.1rem`};
`

export const H4 = styled.h4`
  font-weight: ${fontWeights.bold};
  color: ${greyDark};
  line-height: ${lineHeights.heading};
  font-size: 1.1rem;
  font-family: ${fontFamily};
  margin-bottom: 0.5em;
  ${media.small`font-size: 1.2rem`};
  ${media.medium`font-size: 1.25rem`};
  ${media.large`font-size: 1.3rem`};
`

export const H5 = styled.h5`
  font-weight: ${fontWeights.bold};
  font-size: 15px;
  color: ${greyDark};
  line-height: ${lineHeights.heading};
  ${media.medium`font-size: 16px`};
`

export const Lead = styled.p`
  font-size: 1.1em;
  ${media.medium`
    font-size: 1.2em;
  `};
`

export const Dark = styled.span`
  color: ${greyDark};
`

export const Muted = styled.span`
  color: ${greyLight};
`

export default css`
  /* body {
    font-family: ${fontFamily};
    font-weight: ${fontWeights.regular};
    line-height: ${lineHeights.base};
    color: ${grey};
    font-size: ${stripUnit(fontSizes.regular) - 1 + 'px'};
    ${media.small`
      font-size: ${fontSizes.regular};
    `};
  }
  small {
    font-size: ${stripUnit(fontSizes.small) - 1 + 'px'};
    ${media.small`
      font-size: ${fontSizes.small};
    `};
  }
  strong {
    font-weight: ${fontWeights.bold};
  }
  p {
    margin-bottom: 1.25em;
    &:last-child {
      margin-bottom: 0;
    }
    ${media.medium`
      margin-bottom: 1.5em;
    `};
  }
  p a {
    color: ${primaryColor};
    border-bottom: 1px solid ${rgba(primaryColor, 0.2)};
    transition: border-color ${animationTime} ${animationCurve};
    &:hover,
    &:focus {
      border-color: ${rgba(primaryColor, 0.4)};
    }
  } */
`