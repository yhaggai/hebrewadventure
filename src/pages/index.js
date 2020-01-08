import React from 'react'
import { graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import theme from '../theme'
import FeaturedGallery from '../components/featured-gallery'
import GamesGallery from '../components/games-gallery'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const featuredGames = get(
      this,
      'props.data.allContentfulFeaturedGames.edges[0].node.featuredGames'
    )
    const posts = []
    const [author] = get(this, 'props.data.allContentfulAsset.nodes')
    const games = get(this, 'props.data.allContentfulGame.edges')
    return (
      <ThemeProvider theme={theme}>
        <Layout location={this.props.location}>
          <FeaturedGallery featuredGames={featuredGames} />
          <GamesGallery games={games} />
        </Layout>
      </ThemeProvider>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulGame {
      edges {
        node {
          title
          titleHebrew
          gameBox {
            fluid(
              maxWidth: 720
              maxHeight: 908
              # cropFocus: TOP
              resizingBehavior: SCALE
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulAsset(
      filter: { contentful_id: { eq: "227qXpnpMNQ3eIoomgOaa1" } }
    ) {
      nodes {
        contentful_id
        title
        fluid(
          maxWidth: 1180
          maxHeight: 480
          resizingBehavior: PAD
          background: "rgb:000000"
        ) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulFeaturedGames {
      edges {
        node {
          featuredGames {
            titleHebrew
            subHeader
            banner {
              fluid(
                maxHeight: 300
                maxWidth: 1000
                resizingBehavior: PAD
                background: "rgb:000000"
              ) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
