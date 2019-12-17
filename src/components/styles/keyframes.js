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

export default { neonGlow }
