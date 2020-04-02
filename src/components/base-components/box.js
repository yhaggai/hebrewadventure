import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { border, space, color, layout, fontSize, typography } from 'styled-system'
import systemPropTypes from '@styled-system/prop-types'

const Box = styled.div`
  ${layout}
  ${space}
  ${color}
  ${fontSize}
  ${typography}
  ${border}
`

Box.propTypes = {
  ...systemPropTypes.layout,
  ...systemPropTypes.space,
  ...systemPropTypes.color,
}

export default Box
