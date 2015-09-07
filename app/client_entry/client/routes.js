import React from 'react';
import Route from 'react-router';
import App from '../../views/App';
import Category from '../../views/Category';
import Product from '../../views/Product';

export default function () {
  return (
    <Route component={App}>
      <Route path='/category' component={Category} />
      <Route path='/product' component={Product} />
    </Route>
  );
}
