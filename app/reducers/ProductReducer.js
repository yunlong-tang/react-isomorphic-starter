
const defaultState = [];

export default function productReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_PRODUCT':
      console.log(action);
      console.log(state);
      return state.concat(action.res.data);
    default:
      return state;
  }
}
