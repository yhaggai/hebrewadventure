import React from 'react'
import styled from '@emotion/styled'
import Grid from './grid'
import Box from './box'
import Flex from './flex'
import Img from 'gatsby-image'

const Games = styled(Grid)`
  grid-column: center-start / center-end;
  margin: 5rem 0;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  grid-gap: 7rem;
`

const StyledGameGallery = styled(Flex)`
  grid-column: center-start / center-end;
  margin: 10rem 0;
`.withComponent('section')

const StyledGame = styled(Box)``

const Game = ({ game }) => (
  <StyledGame>
    <Img fluid={game.gameBox.fluid} />
    <div className="game-title">{game.titleHebrew}</div>
  </StyledGame>
)

const Header = styled(Flex)``
const HeaderTitle = Box.withComponent('span')
const MoreButton = Box.withComponent('a')
const GamesGallery = ({ games }) => {
  return (
    <StyledGameGallery flexDirection="column">
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
