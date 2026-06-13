import { createGlobalStyle } from 'styled-components';
import colors from '../constants/colors';
import bp from '../constants/breakpoints';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    /* base responsive font-size */
    font-size: 15px;
  }

  @media (max-width: ${bp.lg}) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: ${bp.sm}) {
    html {
      font-size: 13px;
    }
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    color: ${colors.textBody};
    background: ${colors.whitePure};
    line-height: 1.5;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::selection {
    background: ${colors.goldLight};
    color: ${colors.navy};
  }
`;

export default GlobalStyle;