import { createStore } from 'redux';

export function configureStore () {
  if (module.hot) {
    module.hot.accept('./reducer', () => {});
  }

  return createStore();
}
