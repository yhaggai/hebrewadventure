import { keyframes } from '@emotion/core'
import { glowIn, glowOut } from './effects'
import { colors } from '../../theme'

export const neonGlow = color => keyframes`
  from {
    text-shadow: ${glowIn(color)}
  }
  to {
    text-shadow: ${glowOut(color)}
  }
}`

export const borderGlow = color => keyframes`
  0% { box-shadow: 0 0 -10px ${color}; }
  40% { box-shadow: 0 0 20px ${color}; }
  60% { box-shadow: 0 0 20px ${color}; }
  100% { box-shadow: 0 0 -10px ${color}; }
}`

export default { neonGlow, borderGlow }
