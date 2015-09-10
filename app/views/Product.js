import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';
import * as ProductActions from '../actions/ProductAtions';


@connect(state => ({product: state.product}))
export default class Product extends Component {

  static needs = [
    ProductActions.getProductById
  ]

  render() {
    const {product} = this.props;
    const meta = {
      title: product.title,
      description: product.description,
      meta: {
        name: {
          keywords: product.keywords
        }
      }
    }
    return (
      <div>
        <DocumentMeta {...meta}/>
        {this.props.product}
      </div>
    );
  }
};
