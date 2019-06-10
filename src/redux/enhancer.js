import { compose } from 'redux';

export const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: true,
    })
  : compose;
