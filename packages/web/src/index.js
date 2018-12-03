import React, { StrictMode } from 'react';
import { unstable_createRoot as createRoot } from 'react-dom';

function init() {
  const { App } = require('./containers');

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

if (module.hot) {
  module.hot.accept('./containers', () => {
    init();
  });
}

init();
