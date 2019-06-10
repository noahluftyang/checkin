export const appendHistory = history => ({
  type: 'APPEND_HISTORY',
  payload: history,
});

const initialState = [];

export function historyReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'APPEND_HISTORY':
      return [...state, payload];
    default:
      return state;
  }
}
