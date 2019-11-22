import React from 'react'
import { Link } from 'gatsby'
import { color } from 'styled-system'
import styled from '@emotion/styled'
import styles from './navigation.module.css'

const Box = styled.div`
  ${color};
`;
const Nav = styled.nav`
  ${color}
`

export default () => (
  <Nav color="secondary" bg="bg" role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </Nav>
)
