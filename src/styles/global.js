import { createGlobalStyle, keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(0deg)
  }
  from {
    transform: rotate(-360deg)
  }`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  #root {
    margin: 10px;
  }

  body {
    background: #3d9999;
    -webkit-font-smoothing: antialiased !important;
  }

  body,
  input,
  button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .spinner{
    animation: ${rotate} 800ms linear infinite;
  }
`;
