export const setCheckInName = name => ({
  type: 'SET_CHECK_IN_NAME',
  payload: { name },
});
export const setCheckInComment = comment => ({
  type: 'SET_CHECK_IN_COMMENT',
  payload: { comment },
});
export const postCheckIn = () => ({
  type: 'POST_CHECK_IN',
});

const initialState = {
  name: '',
  comment: '',
  success: false,
};

export function checkinReducer(state = initialState, { payload, type }) {
  switch (type) {
    case 'SET_CHECK_IN_COMMENT':
    case 'SET_CHECK_IN_NAME':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
