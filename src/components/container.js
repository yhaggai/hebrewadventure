import React from 'react'
import styled from '@emotion/styled'
import Grid from './grid'

const Container = styled(Grid)`
  position: relative;
  grid-template-columns:
    minmax(3rem, 1fr) minmax(min-content, 20rem) repeat(
      7,
      minmax(min-content, 20rem)
    )
    minmax(3rem, 1fr);
  grid-template-rows: repeat(3, min-content);
  grid-template-areas:
    'header header header header header header header header header header'
    'main main main main main main main main main main'
    '. footer footer footer footer footer footer footer footer footer';
  padding: 3rem 0;
`

export default ({ children }) => <Container>{children}</Container>
