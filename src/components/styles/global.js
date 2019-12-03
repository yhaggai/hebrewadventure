import { css } from '@emotion/core'

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Assistant&display=swap');
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    direction: rtl;  
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Assistant', sans-serif;
  }
  a {
    text-decoration: none;
  }
  h1,h2 {
    margin: 0;
  }
`
export default globalStyle;