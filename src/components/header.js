import styled from '@emotion/styled';
import Logo from './logo';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import SearchBar from './searchBar';
import Navigation from './navigation';
import { Grid } from './base-components';
import { colors } from '../theme.js';

const LogoStyle = css`
  grid-area: logo;
  text-decoration: none;
`;

const SearchBarStyle = css`
  align-self: center;
  grid-area: search-bar;
`;

const StyledGrid = styled(Grid)`
  grid-area: header;
  grid-template-columns:
    1fr minmax(max-content, 6fr) min-content minmax(max-content, 6fr)
    1fr;
  grid-template-areas: '. logo search-bar navigation .';
  padding: 2rem;
`;

const NavigationStyle = css`
  align-self: center;
  grid-area: navigation;
  align-self: center;
  display: flex;
  justify-content: flex-end;
`;

const LinkStyle = styled(Link)({
  ':visited': {
    color: 'inherit',
  },
  marginLeft: '10px',
  color: colors.brightTurquoise,
  fontSize: '2.3rem',
});

const Header = () => (
  <StyledGrid as="header" gridGap="2rem">
    <Link to="/" css={LogoStyle}>
      <Logo />
    </Link>
    <Navigation css={NavigationStyle}></Navigation>
  </StyledGrid>
);

export default Header;
