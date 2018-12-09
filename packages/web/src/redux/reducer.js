import { combineReducers } from 'redux';

import { checkinReducer as checkin } from './checkin';
import { historyReducer as history } from './history';
import { locationReducer as location } from './location';

export const rootReducer = combineReducers({
  checkin,
  history,
  location,
});
