import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: sans-serif, courier;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .lil-gui {
    font-size: 16px; /* Adjust the font size */
    font-family: 'Roboto Mono', monospace;
    /* color: ${colors.seasalt}; */
  }

  /* Style the lil-gui labels */
  .lil-gui .dg .c {
    font-size: 16px; /* Adjust the control labels */
  }

  .lil-gui > .title {
    font-size: 20px ;
    margin: 0;
    /* letter-spacing: 1.0rem; */
    padding: 4px;
    font-weight: 400;
    height: 34px;
  }

  @media (max-width: 1000px) {
    .lil-gui{
      display: none !important;
    }
  }

  /* Next block defines what root 1rem is */

  /* Standard font-size is 16px.  If 16px is 100%, then 10px is 62.5% */
  /* Here 1rem = 10px */
  html {
    font-size: 62.5%;
  }
  /* screen size: >= 1800px; html font-size: 12px */
  @media only screen and (min-width: 112.5em) {
    html {
      font-size: 75%;
    }  
  }
  /* screen size: <= 1200px; html font-size: 9px */
  @media only screen and (max-width: 75em) {
    html {
      font-size: 56.25%;
    }  
  }
  /* screen size: <= 900px; html font-size: 8px */
  @media only screen and (max-width: 56.25em) {
    html {
      font-size: 50%;
    }  
  }
  /* screen size: <= 600px; html font-size: 7px */
  @media only screen and (max-width: 37.5em) {
    html {
      font-size: 43.75%;
    }  
  }
`;
