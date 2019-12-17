import React from 'react'
import styled from '@emotion/styled'
import Text from './text'
import { grid } from 'styled-system'
import GlowText from './glow-text'
import Flex from './flex'
import Grid from './grid'
const StyledLogo = styled(Grid)`
  grid-template-rows: 1fr 1fr;
`

const Logo = props => {
  return (
    <Flex {...props} flexDirection="column">
      <GlowText color="brightTurquoise" fontSize="8" glowRadius="2">
        הרפתקה בעברית
      </GlowText>
      <Text color="brightTurquoise" opacity="0.6" fontSize="4">
        קווסטים בעברית לילדים ולמבוגרים
      </Text>
    </Flex>
  )
}

export default Logo
