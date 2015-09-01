// import 'babel-core/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { history } from 'react-router/lib/BrowserHistory';
import Router from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';

const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState);

const rootElement = document.getElementById('react-view');

React.render(
  <Provider store={store}>
    {() => <Router children={routes()} history={history} />}
  </Provider>,
  rootElement
);
