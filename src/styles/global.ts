import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FCFCFC;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 18px 'Open Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
