import './style.css'
import React, {Component} from 'react';
import {NOT_FOUND} from 'redux-first-router';
import T from 'prop-types';
import Home from '../Home/';

class App extends Component {
  routeComponent(location) {
    if (location === 'HOME')
      return Home;
    else
      return NOT_FOUND;
  }

  render() {
    const Component = this.routeComponent(this.props.location);
    return (
      <div data-component="App">
        <Component />
      </div>
    );
  }
}

App.propTypes = {
  location: T.string.isRequired,
};

export default App;
