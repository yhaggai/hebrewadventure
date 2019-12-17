import React from 'react';
import styled from '@emotion/styled';
import Heading from './heading';
import { border, space } from 'styled-system'

const Box = styled.div`
  ${space}
  ${border}
`


const SubHeader = ({ children }) => {
  return <Box border={1} m={2} borderColor="red">
    {children}
  </Box>
}

export default SubHeader;