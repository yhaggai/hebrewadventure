import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Grid from '../components/grid'
import ArticlePreview from '../components/article-preview'
import theme from '../theme'
import FeaturedGallery from '../components/featured-gallery'
import GamesGallery from '../components/games-gallery'

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
`
class RootIndex extends React.Component {
  // async componentWillMount() {
  // const res = await fetch("https://haggaidevaccount.spaces.nexudus.com/en/user/login?t=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRvZ2FmaWwzMzdAeGh5ZW1haWwuY29tIiwiaXNzIjoic2VsZiIsImF1ZCI6Imh0dHBzOi8vc3BhY2VzLm5leHVkdXMuY29tIiwiZXhwIjoxNTgyNDkwNjc4LCJuYmYiOjE1ODI0ODg4Nzh9.q9mchKpw-BMtNAhgOIFSrs7Ufsi4uVvc2S4jqSaEdSw")
  // console.log(res);

  // }
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
      <Layout location={this.props.location}>
        <MainContent as="main">
          <iframe id="inlineFrameExample"
            title="Inline Frame Example"
            width="1080"
            height="800"
            src="https://haggaidevaccount.spaces.nexudus.com/en/bookings/calendar">
          </iframe>
        </MainContent>
      </Layout>
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
    # allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
    #   edges {
    #     node {
    #       title
    #       slug
    #       publishDate(formatString: "MMMM Do, YYYY")
    #       tags
    #       heroImage {
    #         fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
    #           ...GatsbyContentfulFluid_tracedSVG
    #         }
    #       }
    #       description {
    #         childMarkdownRemark {
    #           html
    #         }
    #       }
    #     }
    #   }
    # }
    allContentfulGame {
      edges {
        node {
          title
          titleHebrew
          slug
          gameBox {
            fluid(maxWidth: 720, maxHeight: 908, resizingBehavior: SCALE) {
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
            slug
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
