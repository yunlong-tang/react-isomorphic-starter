import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';
import * as ProductActions from '../actions/ProductAtions';

export default class Home extends Component {

  static needs = [
    ProductActions.getProductById
  ]

  render() {
    const meta = {
      title: 'SNS Platform',
      description: 'SNS Platform',
      meta: {
        name: {
          keywords: 'SNS Platform'
        }
      }

    }
    return (
      <div>
        <DocumentMeta {...meta}/>
        <div>Home</div>
      </div>
    );
  }
};
