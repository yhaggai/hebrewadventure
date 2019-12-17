import styled from '@emotion/styled';
import { space, fontSize, fontWeight, lineHeight, color } from 'styled-system';

export default Text = styled('div')`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`
Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
}