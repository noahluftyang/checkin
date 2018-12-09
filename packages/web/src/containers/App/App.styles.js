import { Router } from '@reach/router';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
  }

  html {
    font-family: sans-serif;
    text-size-adjust: 100%;
  }

  body {
    background-color: #eee;
    display: flex;
    font-family: 'Noto Sans KR', 'Roboto';
  }

  a {
    all: unset;
  }

  button {
    all: unset;
  }

  h4 {
    font-size: 1rem;
    font-weight: 400;
  }

  h5 {
    font-size: 0.8rem;
    font-weight: 400;
  }

  input {
    border: 0;
  }

  textarea {
    resize: none;

    &:focus {
      outline: 0;
    }
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
