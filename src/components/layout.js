import React from 'react';
import Container from './container';
import Header from './header';
import { Global } from '@emotion/core';
import globalStyle from './styles/global';
import styled from '@emotion/styled';
import Box from '../components/base-components/box';
import Footer from './footer';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';

import rectangle from '../../static/svgs/rectangle.svg';

const StyledLayout = styled(Box)`
  background: url(${rectangle});
  background-position: bottom right;
  background-size: 50vw;
  background-repeat: no-repeat;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <Container>
          <Global styles={globalStyle} />
          <Header />
          {children}
          <Footer />
        </Container>
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
