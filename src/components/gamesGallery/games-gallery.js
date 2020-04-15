import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import { Grid, Box, Flex } from '../base-components';
import { useAllGames } from '../../graphql/hooks';
import {
  ImageWrapperStyle,
  GameGalleryStyle,
  GamesStyle,
} from './game-gallery-styles';

const StyledGameGallery = styled(Flex)(GameGalleryStyle);

const Games = styled(Grid)(GamesStyle);
const Game = ({ game }) => (
  <Link
    to={`/games/${game.slug}`}
    css={css`
      text-decoration: none;
    `}
  >
    <Box css={ImageWrapperStyle}>
      <Img css={css} fluid={game.titleImage.fluid} />
    </Box>
    <Box mt="1.5rem" fontSize={3}>
      {game.titleHebrew}
    </Box>
  </Link>
);

const Header = styled(Flex)``;
const HeaderTitle = Box.withComponent('span');
const MoreButton = Box.withComponent('a');

const GamesGallery = () => {
  const games = useAllGames();
  return (
    <StyledGameGallery as="section" flexDirection="column">
      <Header flexDirection="row" justifyContent="space-between">
        <HeaderTitle
          fontSize="3rem"
          fontFamily="sans-serif"
          color="white"
          className="title"
        >
          המשחקים
        </HeaderTitle>
        <MoreButton fontSize="2.3rem" href="/">
          רוצה עוד{' '}
        </MoreButton>
      </Header>
      <Games>
        {games.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
    </StyledGameGallery>
  );
};

export default GamesGallery;
