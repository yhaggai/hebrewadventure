import React from 'react'
import styled from '@emotion/styled'
import Grid from './grid'

const Container = styled(Grid)`
  position: relative;
  grid-template-columns:
    [full-start] minmax(3rem, 1fr) minmax(min-content, 20rem) [center-start] repeat(
      7,
      [col-start] minmax(min-content, 20rem) [col-end]
    )
    [center-end] minmax(3rem, 1fr) [full-end];
  grid-template-rows: repeat(4, min-content);
  grid-template-areas:
    'header header header header header header header header header header'
    'featured featured featured featured featured featured featured featured featured featured'
    '. gallery  gallery gallery gallery gallery gallery gallery gallery .'
    '. footer footer footer footer footer footer footer footer footer';
  padding: 3rem 0;
`

export default ({ children }) => <Container>{children}</Container>
