import React, { StrictMode } from 'react';
import { unstable_createRoot as createRoot } from 'react-dom';

const mountNode = document.getElementById('root');

function init() {
  const { App } = require('./containers');

  createRoot(mountNode).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

init();
