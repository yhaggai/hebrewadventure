import styled from '@emotion/styled';
import { grid } from 'styled-system';
import Box from './box';
import systemPropTypes from '@styled-system/prop-types';

const Grid = styled(Box)`
  ${grid};
`;

Grid.defaultProps = {
  display: 'grid',
};

Grid.propTypes = {
  ...Box.propTypes,
  ...systemPropTypes.grid,
};

export default Grid;
