import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
import Header from './header'
import { Global } from '@emotion/core'
import globalStyle from './styles/global'
import styled from '@emotion/styled'
import Box from '../components/box'
import Footer from './footer'
import rectangle from '../../static/svgs/rectangle.svg'

const StyledLayout = styled(Box)`
  background: url(${rectangle});
  background-position: bottom right;
  background-size: 50vw;
  background-repeat: no-repeat;
`

const Layout = props => {
  const { location, children } = props
  let header

  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return (
    <StyledLayout>
      <Container>
        <Global styles={globalStyle} />
        <Header />
        {children}
        <Footer />
      </Container>
    </StyledLayout>
  )
}

export default Layout
