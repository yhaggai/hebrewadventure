import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { Grid, Box } from '../components/base-components';
import styled from '@emotion/styled';
import { map, flow, zip } from 'lodash/fp';
import Layout from '../components/layout';
import GameHeader from '../components/game-header';
import TextContent from '../components/text-content';
import GameDetails from '../components/game-details';
import ImageCarousel from '../components/image-carousel';
import getGalleryObject from '../utils/get-gllery-object';

import 'react-image-gallery/styles/css/image-gallery.css';

const Description = styled(TextContent)``;
const InstallationGuide = styled(TextContent)``;

const MainSection = styled(Grid)`
  margin-top: 3rem;
  grid-area: main;
  grid-row-gap: 5rem;
  grid-template-columns: minmax(3rem, 1fr) repeat(6, minmax(min-content, 15rem)) minmax(
      3rem,
      1fr
    );
  grid-template-rows: min-content 15rem repeat(2, min-content);
  grid-template-areas:
    '. game-header game-header game-header game-header game-header game-header .'
    'gallery gallery gallery gallery gallery gallery gallery gallery'
    '. description description description game-details game-details game-details .'
    '. installation installation installation . . . .';
  ${GameHeader} {
    grid-area: game-header;
  }
  ${Description} {
    grid-area: description;
  }
  ${InstallationGuide} {
    grid-area: installation;
  }
  ${ImageCarousel} {
    grid-area: gallery;
  }
  ${GameDetails} {
    grid-area: game-details;
  }
`;

const InstallationGuideBackground = () => (
  <Grid gridColumn="1 / -1" bg="aztec" gridRow="4" />
);

const Game = ({ data: { contentfulGame } }) => {
  const {
    installationGuide,
    description,
    screenshots,
    thumbnails,
  } = contentfulGame;

  const [galleryImages, setGalleryImages] = useState(() =>
    getGalleryObject(contentfulGame)
  );
  return (
    <Layout>
      <MainSection as="main">
        <GameHeader game={contentfulGame} />
        <ImageCarousel screenshots={screenshots} thumbnails={thumbnails} />
        <Description
          title="תקציר"
          text={description.childMarkdownRemark.html}
        />
        <InstallationGuideBackground />
        <InstallationGuide
          title="הוראות התקנה"
          text={installationGuide.childMarkdownRemark.html}
          my="3rem"
        />
        <GameDetails game={contentfulGame} />
      </MainSection>
    </Layout>
  );
};

export const pageQuery = graphql`
  query GameBySlug($slug: String!) {
    contentfulGame(slug: { eq: $slug }) {
      title
      worksOn
      titleHebrew
      sizeInKiloBytes
      getGameLink
      description {
        childMarkdownRemark {
          html
        }
      }
      installationGuide {
        childMarkdownRemark {
          html
        }
      }
      releaseDate(formatString: "MMM, YYYY")
      gameDeveloper {
        name
      }
      gameBox {
        fluid(maxWidth: 400) {
          ...GatsbyContentfulFluid
        }
      }
      screenshots {
        fluid(maxWidth: 800) {
          src
        }
      }
      thumbnails: screenshots {
        fluid(maxWidth: 200) {
          src
        }
      }
    }
  }
`;

export default Game;
