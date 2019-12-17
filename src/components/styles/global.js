import { css } from '@emotion/core'
import theme from '../../theme.js';
import strangerFont from '../../../static/fonts/stranger.woff2';

const { colors } = theme;
const globalStyle = css`
  @font-face {
    font-family: 'stranger';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${strangerFont}) format('woff2');
  }
  
  ${'' /* @import url('https://fonts.googleapis.com/css?family=Assistant&display=swap'); */}
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    color: ${colors.masterSwordBlue};
    background-color:	${colors.blue[2]};
    padding: 0; 
    margin: 0;
    direction: rtl;  
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'stranger', sans-serif;
  }
  a {
    text-decoration: none;
  }
  h1,h2 {
    margin: 0;
  }
`
export default globalStyle;