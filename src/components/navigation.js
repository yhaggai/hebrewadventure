import React from 'react';
import { neonGlow } from './styles/keyframes';
import { css } from '@emotion/core';

import { Flex } from './base-components';

const Nav = Flex.withComponent('nav');

export default (props) => (
  <Nav {...props} color="brightTurquoise" role="navigation">
    {props.children}
  </Nav>
);
