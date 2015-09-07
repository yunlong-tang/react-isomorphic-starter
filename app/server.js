import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Router from 'react-router';
import Location from 'react-router/lib/Location';

import homePageRoutes from './client_entry/homepage/routes';
import clientRoutes from './client_entry/client/routes';
import configureStore from './store/configureStore';
import fetchComponentData from './lib/fetchComponentData';

const app = express();
const port = process.env.PORT || 8080;

app.use(favicon(path.join(__dirname, '../dist/favicon.ico')));
// Use this middleware to serve up static files built into the dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// This is fired every time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {

  const location = new Location(req.path, req.query);
  const store = configureStore();
  let routes;
  let bundle;
  if (req.path == '/') {
    routes = homePageRoutes();
    bundle = '/homepage/bundle.js';
  } else if (req.path === '/category' || req.path === '/product') {
    routes = clientRoutes();
    bundle = '/client/bundle.js';
  }

  Router.run(routes, location, (error, routeState, transition) => {

    function renderView() {
      const InitialView = (
        <Provider store={store}>
          {() =>
            <Router {...routeState} />
          }
        </Provider>
      );

      const componentHTML = React.renderToString(InitialView);

      const initialState = store.getState();

      const HTML = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Redux Demo</title>
            <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
          </head>
          <body>
            <div id="react-view">${componentHTML}</div>
            <script src="/react-common.js"></script>
            <script src=${bundle}></script>
          </body>
        </html>
      `;

      return HTML;
    }

    fetchComponentData(store.dispatch, routeState.components, routeState.params)
      .then(renderView)
      .then(html => res.end(html))
      .catch(err => res.end(err.message));
  });
}

app.listen(port);
