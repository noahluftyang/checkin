import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './store';

const store = configureStore();

export const ReduxProvider = ({ children }) => <Provider store={store}>{children}</Provider>;
