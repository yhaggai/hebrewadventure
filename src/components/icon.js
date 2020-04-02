import React from 'react';
import styled from '@emotion/styled';
import { Box } from './base-components';
import { colors } from '../theme';

const StyledIcon = styled(Box)`
  display: flex;
  text-align: center;
  border-radius: 50%;
  transition: .5s;
  position:relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${colors.turquoiseBlue};
    transition: .5s;
    transform: scale(.9);
    z-index: -1;
  }
  &:hover::before  {
    transform: scale(1.1);
    box-shadow: 0 0 1.5rem ${colors.turquoiseBlue};
  }
  &:hover {
    color: ${colors.turquoiseBlue};
    box-shadow: 0 0 .5rem ${colors.turquoiseBlue};
    text-shadow: 0 0 .5rem ${colors.turquoiseBlue};
  }
}
`;
StyledIcon.defaultProps = {
  backgroundColor: colors.aztec,
  width: '5rem',
  height: '5rem',
};

const Icon = ({ children }) => {
  return <StyledIcon className="icon">{children}</StyledIcon>;
};

export default Icon;
