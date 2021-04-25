import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  body {
    background: #3742fa;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
`;
