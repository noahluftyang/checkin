import { combineReducers } from 'redux';

import { locationReducer as location } from './location';

export const rootReducer = combineReducers({
  location,
});
