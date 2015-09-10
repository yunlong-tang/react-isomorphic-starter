import React, {Component, PropTypes} from 'react';
import DocumentMeta from 'react-document-meta';

class Head extends Component {
  render() {
    return (
      <head>
        <meta charSet="utf-8" />
        {DocumentMeta.renderAsReact()}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      </head>
    );
  }
}

export default Head;
