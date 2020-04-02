import styled from '@emotion/styled';
import { flexbox } from 'styled-system';
import Box from './box';
import systemPropTypes from '@styled-system/prop-types';

const Flex = styled(Box)`
  ${flexbox};
`;

Flex.defaultProps = {
  display: 'flex',
};

Flex.propTypes = {
  ...Box.propTypes,
  ...systemPropTypes.flexbox,
};

export default Flex;
