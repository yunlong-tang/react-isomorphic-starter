import { combineReducers } from 'redux';
import product from './ProductReducer';

const rootReducer = combineReducers({
  product
});

export default rootReducer;
