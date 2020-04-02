import { css } from '@emotion/core';
import { colors } from '../../theme.js';
const { brightTurquoise } = colors;

export const ImageWrapperStyle = css`
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
`;

export const GameGalleryStyle = css`
  grid-area: gallery;
  margin: 10rem 0;
`;

export const GamesStyle = css`
  margin: 5rem 0;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 3.5rem;
`;
