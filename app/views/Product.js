import React, {Component, PropTypes} from 'react';
import * as ProductActions from '../actions/ProductAtions';
import {connect} from 'react-redux';

@connect(state => ({product: state.product}))
export default class Product extends Component {

  static needs = [
    ProductActions.getProductById
  ]

  render() {
    return (
      <div>
        Product
        {this.props.product}
      </div>
    );
  }
};
