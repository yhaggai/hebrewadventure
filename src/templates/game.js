import React, { useState } from 'react'
import { graphql } from 'gatsby'
import ImageGallery from 'react-image-gallery'
import Grid from '../components/grid'
import Flex from '../components/flex'
import Box from '../components/box'
import Heading from '../components/heading'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { map, flow, zip } from 'lodash/fp'
import Layout from '../components/layout'
import GameHeader from '../components/game-header';
import TextContent from '../components/text-content';
import GameDetails from '../components/game-details';

import 'react-image-gallery/styles/css/image-gallery.css'


const MainSection = styled(Grid)`
margin-top: 3rem;
grid-area: main;
grid-row-gap: 5rem;
grid-template-columns: minmax(3rem, 1fr) repeat(6, minmax(min-content, 15rem)) minmax(3rem, 1fr);
grid-template-rows: repeat(2, min-content);
grid-template-areas:
  '. game-header game-header game-header game-header game-header game-header .'
  '. text-content text-content text-content game-details game-details game-details .';
  ${GameHeader} {
    grid-area: game-header;
  }
  ${TextContent} {
    grid-area: text-content;
  }
  ${GameDetails} {
    grid-area: game-details;
  }
`

function getGalleryImages({ screenshots, thumbnails }) {
  return flow(
    zip,
    map(([screenshot, thumbnail]) => [
      screenshot.fluid.src,
      thumbnail.fluid.src,
    ]),
    map(([screenshotSrc, thumbnailSrc]) => ({
      original: screenshotSrc,
      thumbnail: thumbnailSrc,
    }))
  )(screenshots, thumbnails)
}


const Game = ({ data: { contentfulGame } }) => {
  console.log('contentfulGame', contentfulGame)
  const { title, titleHebrew, banner, screenshots, thumbnails } = contentfulGame
  const [galleryImages, setGalleryImages] = useState(() =>
    getGalleryImages(contentfulGame)
  )

  return (
    <Layout>
      <MainSection as='main'>
        <GameHeader {...contentfulGame} />
        <TextContent />
        <GameDetails />
      </MainSection>

      {/* <ImageGallery items={galleryImages} /> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query GameBySlug($slug: String!) {
        contentfulGame(slug: {eq: $slug }) {
        title
      titleHebrew
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
  `

export default Game
