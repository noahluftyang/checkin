import * as React from 'react';
import { Provider } from 'react-redux';
import { SFC } from 'react';

import { configureStore } from './store';

const store = configureStore();

export const ReduxProvider: SFC = ({ children }) => <Provider store={store}>{children}</Provider>;
