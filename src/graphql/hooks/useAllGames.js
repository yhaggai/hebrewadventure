import { useStaticQuery, graphql } from 'gatsby';

export const useAllGames = () => {
  const {
    allContentfulGame: { nodes: games },
  } = useStaticQuery(graphql`
    query getAllGames {
      allContentfulGame {
        nodes {
          id
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
  `);

  return games;
};
