import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`  
  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: #121212;
    font-family: 'Montserrat', sans-serif;
  }
`
export default GlobalStyles;