import 'sanitize.css';

import React, { Component, Suspense, lazy } from 'react';

import { GlobalStyle, StyledRouter } from './styles';
import { Nav } from '../../components';
import { ReduxProvider } from '../../redux';

const HomePage = lazy(() => import('../Home'));
const CheckinPage = lazy(() => import('../Checkin'));
const PostPage = lazy(() => import('../Post'));

export class App extends Component {
  render() {
    return (
      <ReduxProvider>
        <Suspense fallback={null}>
          <GlobalStyle />
          <StyledRouter basepath="/">
            <HomePage path="/" />
            <CheckinPage path="checkin" />
            <PostPage path="post" />
          </StyledRouter>
          <Nav />
        </Suspense>
      </ReduxProvider>
    );
  }
}
