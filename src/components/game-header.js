import React from 'react'
import Grid from '../components/grid'
import Box from '../components/box'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Button from '../components/button'
import Img from 'gatsby-image'
import ArrowCircleDown from 'emotion-icons/fa-solid/ArrowCircleDown';

const HebrewTitle = styled(Box)``;
const EnglishTitle = styled(Box)``;
const DevelopingCompany = styled(Box)``;
const GameBox = styled(Img)``

const GameHeaderStyle = css`
  grid-area: game-header;
  grid-column-gap: 2rem;
  grid-template-columns: minmax(min-content, 20rem) minmax(min-content, 20rem);
  grid-template-rows: repeat(3, min-content) 1fr 1fr;
  grid-template-areas:
    'box-image hebrew-title'
    'box-image english-title'
    'box-image company'
    'box-image .'
    'box-image action-button';
  ${GameBox} {
      grid-area: box-image;
  }
  ${HebrewTitle} {
      grid-area: hebrew-title;
  }
  ${EnglishTitle} {
      grid-area: english-title;
  }
  ${DevelopingCompany} {
      grid-area: company;
  }
  ${Button} {
    grid-area: action-button;
    width:100%;
  }
`

const GameHeader = styled(({ titleHebrew, title, gameBox, gameDeveloper, ...rest }) => {
  return (
    <Grid as='section' {...rest}>
      <GameBox fluid={gameBox.fluid} />
      <HebrewTitle color="white" fontSize="3.5rem">
        {titleHebrew}
      </HebrewTitle>
      <EnglishTitle fontSize="2rem" fontFamily='ariel' color="alto">{title}</EnglishTitle>
      <DevelopingCompany fontFamily='ariel' color="alto">{gameDeveloper.name}</DevelopingCompany>
      <Button className='action-button' bg="green" color="bunker" icon={ArrowCircleDown}>לקניה</Button>
    </Grid>
  )
})(GameHeaderStyle);

export default GameHeader;