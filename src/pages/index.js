import React from 'react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { Grid } from '../components/base-components';
import FeaturedGallery from '../components/featured-gallery';
import GamesGallery from '../components/gamesGallery/games-gallery';

const MainContent = styled(Grid)`
  grid-area: main;
  grid-template-columns: minmax(3rem, 1fr) repeat(8, minmax(min-content, 20rem)) minmax(
      3rem,
      1fr
    );
  grid-template-rows: repeat(2, min-content);
  grid-template-areas:
    'featured featured featured featured featured featured featured featured featured featured'
    '. gallery  gallery gallery gallery gallery gallery gallery gallery .';
`;

const RootIndex = () => (
  <Layout>
    <MainContent as="main">
      <FeaturedGallery />
      <GamesGallery />
    </MainContent>
  </Layout>
);

export default RootIndex;
