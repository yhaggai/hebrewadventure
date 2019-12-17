const RATIOS = [1, 2, 3, 4, 7, 8, 10, 15]
import { curry } from 'lodash'

export const glow = (radius, color) => `
  0 0 ${radius * 1}px ${color}, 
  0 0 ${radius * 2}px ${color},
  0 0 ${radius * 4}px ${color},
  0 0 ${radius * 15}px ${color};
`

export const glowIn = curry(glow)(10)
export const glowOut = curry(glow)(5)
