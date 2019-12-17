import React from 'react'
import { Link } from 'gatsby'
import { color } from 'styled-system'
import styled from '@emotion/styled'
import styles from './navigation.module.css'
import Logo from './logo';
import { neonGlow } from './styles/keyframes';
import SearchBar from './searchBar'

const easeInOutQuad = `cubic-bezier(0.455, 0.030, 0.515, 0.955);`;

const Title = styled.div`
  animation: ${neonGlow} 2s infinite alternate ${easeInOutQuad};
`

const Box = styled.div`
  animation: ${neonGlow} 2s infinite alternate ${easeInOutQuad};
  ${color};
`;

const Nav = styled.nav`
  ${color}
`

export default () => (
  <Nav color="secondary" bg="bg" role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">בית</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">משחקים</Link>
      </li>
    </ul>
    <Logo />
    <SearchBar />
  </Nav>
)
