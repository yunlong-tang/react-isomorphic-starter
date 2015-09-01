import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import promiseMiddleware from '../lib/promiseMiddleware';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  loggerMiddleware
)(createStore);

// Creates a preconfigured store for this example.
export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
