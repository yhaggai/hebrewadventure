const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const Game = path.resolve('./src/templates/game.js');
    resolve(
      graphql(
        `
          {
            allContentfulGame {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const games = result.data.allContentfulGame.edges;
        games.forEach((game) => {
          createPage({
            path: `/games/${game.node.slug}/`,
            component: Game,
            context: {
              slug: game.node.slug
            },
          })
        })
      })
    )
  })
}
