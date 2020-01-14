import React, { useState } from 'react'
import { graphql } from 'gatsby'
import ImageGallery from 'react-image-gallery'
import Img from 'gatsby-image'
import { space } from 'styled-system'
import Heading from '../components/heading'
import styled from '@emotion/styled'
import { map, flow, zip } from 'lodash/fp'
import Layout from '../components/layout'
import SubHeader from '../components/subHeader'

import 'react-image-gallery/styles/css/image-gallery.css'

const Banner = styled(Img)`
  height: 61.50894vw;
  max-height: 655px;
`
const Title = styled(Heading)`
  text-align: center;
`

const Spacer = styled.div(space)

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
      <Title>{titleHebrew}</Title>
      <Title>{title}</Title>
      <Spacer />
      <Banner fluid={banner.fluid} />
      <ImageGallery items={galleryImages} />
      <SubHeader>hi!</SubHeader>
    </Layout>
  )
}

export const pageQuery = graphql`
  query GameBySlug($slug: String!) {
    contentfulGame(slug: { eq: $slug }) {
      title
      titleHebrew
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
      banner {
        fluid(maxWidth: 1080) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Game
