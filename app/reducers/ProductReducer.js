
const defaultState = [];

export default function productReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_PRODUCT':
      state = action.res.data;
      return state;
    default:
      return state;
  }
}
