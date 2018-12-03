import 'sanitize.css';

import React, { Component, Suspense, lazy } from 'react';

import { StyledRouter } from './styles';
import { Nav } from '../../components';
import { ReduxProvider } from '../../redux';

const HomePage = lazy(() => import('../Home'));
const CheckinPage = lazy(() => import('../Checkin'));

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eee;
    display: flex;
    font-family: 'Roboto', 'Noto Sans KR';
  }
`;

export class App extends Component {
  render() {
    return (
      <ReduxProvider>
        <Suspense fallback={null}>
          <GlobalStyle />
          <StyledRouter basepath="/">
            <HomePage path="/" />
            <CheckinPage path="checkin" />
          </StyledRouter>
          <Nav />
        </Suspense>
      </ReduxProvider>
    );
  }
}
