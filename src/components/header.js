/** @jsx jsx */

import React from 'react'
import styled from '@emotion/styled'
import Logo from './logo'
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'
import SearchBar from './searchBar'
import Navigation from './navigation'
import Grid from './grid'
import Flex from './flex'
import { colors } from '../theme.js'

const LogoStyle = css`
  grid-column: 1 / 2;
`

const SearchBarStyle = css`
  align-self: end;
`

const HeaderGrid = styled(Grid)`
  grid-column: full-start / full-end;
  padding: 2rem;
`

const NavigationStyle = css`
  align-self: center;
`

const LinkStyle = styled(Link)({
  ':visited': {
    color: 'inherit',
  },
  color: colors.brightTurquoise,
  fontSize: '2.3rem',
})

const Header = () => (
  <HeaderGrid
    gridTemplateColumns="minmax(max-content,1fr) min-content 1fr"
    gridGap="2rem"
  >
    <Logo css={LogoStyle} />
    <SearchBar css={SearchBarStyle} />
    <Navigation
      css={NavigationStyle}
      alignSelf="center"
      justifyContent="flex-start"
    >
      <Grid gridTemplateColumns="repeat(auto-fill, 50px)" gridColumnGap="2rem">
        <LinkStyle to="/">בית</LinkStyle>
        <LinkStyle to="/blog/">משחקים</LinkStyle>
      </Grid>
    </Navigation>
  </HeaderGrid>
)

export default Header
