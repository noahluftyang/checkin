import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { enhancer } from './enhancer';
import { rootReducer } from './reducer';

export function configureStore () {
  if (module.hot) {
    module.hot.accept('./reducer', () => {});
  }

  return createStore(rootReducer, enhancer(applyMiddleware(thunk)));
}
