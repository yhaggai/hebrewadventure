import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get'

const Heading = styled.h1`
  font-weight: ${themeGet('fontWeights.bold')};
  font-size: ${themeGet('fontSizes.3')};
  margin: 0;
`;

export default Heading;
