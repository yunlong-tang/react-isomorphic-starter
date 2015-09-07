import React, {Component, PropTypes} from 'react';
import * as ProductActions from '../actions/ProductAtions';
import {connect} from 'react-redux';

@connect(state => ({product: state.product}))
export default class Category extends Component {

  static needs = [
    ProductActions.getProductById
  ]

  render() {
    return (
      <div>
        Category
        {this.props.product}
      </div>
    );
  }
};
