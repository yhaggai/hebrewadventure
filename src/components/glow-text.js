import styled from '@emotion/styled'
import Text from './text'
import { themeGet } from '@styled-system/theme-get'
import { neonGlow } from './styles/keyframes'
import { glow } from './styles/effects'

const easeInOutQuad = `cubic-bezier(0.455, 0.030, 0.515, 0.955);`

const GlowText = styled(Text)(props => {
  const { color, glowRadius } = props
  const hexColor = themeGet(`colors.${color}`)(props)
  return {
    textShadow: `${glow(glowRadius, hexColor)}`,
    '&:hover': {
      animation: `${neonGlow(hexColor)} 2s infinite alternate ${easeInOutQuad}`,
    },
  }
})

export default GlowText
