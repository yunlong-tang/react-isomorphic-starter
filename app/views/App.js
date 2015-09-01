import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <h1>APP</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
