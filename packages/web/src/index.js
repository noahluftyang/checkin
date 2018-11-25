import './index.css';
import React, { StrictMode } from 'react';
import { unstable_createRoot as createRoot } from 'react-dom';

import { App } from './containers';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
