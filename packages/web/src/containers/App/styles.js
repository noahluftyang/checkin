import { Router } from '@reach/router';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    text-size-adjust: 100%;
  }

  body {
    background-color: #eee;
    display: flex;
    font-family: 'Noto Sans KR', 'Roboto';
  }

  h4 {
    font-size: 1rem;
    font-weight: 400;
  }

  h5 {
    font-size: 0.8rem;
    font-weight: 400;
  }

  button {
    all: unset;
  }

  input {
    border: 0;
  }

  #root {
    display: flex;
    width: 100%;
  }
`;

export const StyledRouter = styled(Router)`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
