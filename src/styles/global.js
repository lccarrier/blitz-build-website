import { css, createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'

import Normalize from './normalize'
import Typography from './typography'
import { white, black } from './colors'
import * as spacing from './spacing'
import { media } from './media'

// Animation
export const animationTime = '0.3s'
export const animationCurve = 'cubic-bezier(0.785, 0.135, 0.150, 0.860)'

// Border Radius
export const borderRadius = '5px'

// Inputs
export const inputHeight = '48px'
export const inputHeightDesktop = '54px'

// Vertical padding
export const verticalPadding = padding => css`
  padding-top: ${padding};
  padding-bottom: ${padding};
`

// Square
export const square = size => css`
  width: ${size};
  height: ${size};
`

export const boxShadow = `box-shadow: 0 2px 4px 0 ${rgba(black, 0.1)};`

// Cover
export function cover(position) {
  return `
    position: ${position};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `
}

// Styles

export const GlobalStyle = createGlobalStyle`
  ${Normalize};
  ${Typography};
  body {
    background-color: ${white};
    &.is-clipped {
      overflow: hidden;
    }
  }
  #drift-widget {
    bottom: ${spacing.tiny} !important;
    right: ${spacing.tiny} !important;
    ${media.medium`
      bottom: ${spacing.small} !important;
      right: ${spacing.small} !important;
    `};
  }
`