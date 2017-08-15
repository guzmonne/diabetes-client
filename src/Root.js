import React from 'react'
import T from 'prop-types'
import {Provider} from 'react-redux';
import App from './components/App/';

class Root extends React.Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: T.object.isRequired,
}

export default Root
