/** @jsx jsx */

import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import Grid from './grid'
import Box from './box'
import Flex from './flex'
import styled from '@emotion/styled'
import { space, fontSize, color } from 'styled-system'
import Button from './button'
import { map, pick } from 'lodash'
import { css, jsx } from '@emotion/core'

const StyledFeaturedGallery = styled(Grid)`
  grid-area: featured;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: min-content;
  margin: 5rem 0;
`

const StyledImageGallery = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1;
`

const FeaturedGameContent = styled(Flex)({
  gridColumn: '2 / 3',
  gridRow: '1',
  zIndex: '2',
  margin: 0,
  color,
})

const ButtonStyle = css`
  align-self: baseline;
`
FeaturedGameContent.Title = styled(Box)``
FeaturedGameContent.Description = styled(Box)``

const FeaturedGallery = ({ featuredGames }) => {
  const [featuredGameIndex, setFeaturedGameIndex] = useState(0)
  console.log(featuredGames)
  const images = map(featuredGames, featuredGame => ({
    srcSet: featuredGame.banner?.fluid?.srcSet,
  }))
  const { titleHebrew, subHeader } = featuredGames[featuredGameIndex]
  return (
    <StyledFeaturedGallery as="section">
      <StyledImageGallery>
        <ImageGallery
          items={images}
          showBullets={true}
          showPlayButton={false}
          showThumbnails={false}
          showNav={false}
          showFullscreenButton={false}
          onSlide={index => setFeaturedGameIndex(index)}
        />
      </StyledImageGallery>
      <FeaturedGameContent
        flexDirection="column"
        bg="racingGreen70"
        alignItem="center"
        justifyContent="center"
        pr="5rem"
      >
        <FeaturedGameContent.Title color="green" fontSize="2.7rem">
          {titleHebrew}
        </FeaturedGameContent.Title>
        <FeaturedGameContent.Description
          fontFamily="sans-serif"
          color="white"
          fontSize="2.7rem"
        >
          {subHeader}
        </FeaturedGameContent.Description>
        <Button css={ButtonStyle} bg="green" color="woodsmoke">
          שחקו עכשיו!
        </Button>
      </FeaturedGameContent>
    </StyledFeaturedGallery>
  )
}

export default FeaturedGallery
