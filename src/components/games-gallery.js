import React from 'react'
import styled from '@emotion/styled'
import Grid from './grid'
import Box from './box'
import Flex from './flex'
import { borderGlow } from './styles/keyframes'
import { colors } from '../theme.js'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const { brightTurquoise } = colors
const StyledGameGallery = styled(Flex)`
  grid-area: gallery;
  margin: 10rem 0;
`

const Games = styled(Grid)`
  margin: 5rem 0;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 3.5rem;
`

const StyledGame = styled(Box)``

const ImageWrapperStyle = css`
  position: relative;
  transition: transform 0.3s;
  box-shadow: 0 0 5px ${brightTurquoise};
  &:before {
    border-radius: 10px;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${brightTurquoise};
    z-index: -1;
    transition: 1s;
    transform: scale(0.9);
  }
  &:hover:before {
    border-radius: 10px;
    ${'' /* transform: scale(1.05); */}
    box-shadow: 0 0 15px ${brightTurquoise};
  }
  &:hover {
    transform: perspective(195px) rotateX(9deg) scale(1.03);

    ${'' /* transform: translateY(-0.5rem) scale(1.03); */}
    ${
      '' /* color: ${brightTurquoise};
    box-shadow: 0 0 5px ${brightTurquoise}; */
    }
  }
  ${
    '' /* &:hover {
    animation: ${borderGlow(colors.brightTurquoise)} 2s infinite;
  } */
  }
`
const Game = ({ game }) => (
  <StyledGame as="a" href={`/games/${game.slug}`}>
    <Box css={ImageWrapperStyle}>
      <Img css={css} fluid={game.gameBox.fluid} />
    </Box>
    <div className="game-title">{game.titleHebrew}</div>
  </StyledGame>
)

const Header = styled(Flex)``
const HeaderTitle = Box.withComponent('span')
const MoreButton = Box.withComponent('a')
const GamesGallery = ({ games }) => {
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
        {games.map(game => (
          <Game game={game.node} />
        ))}
      </Games>
    </StyledGameGallery>
  )
}

export default GamesGallery
