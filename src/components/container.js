import React from 'react'
import styled from '@emotion/styled'
import Grid from './grid'

const Container = styled(Grid)`
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
  grid-template-rows: min-content min-content;
  padding: 3rem 0;
`

export default ({ children }) => <Container>{children}</Container>
