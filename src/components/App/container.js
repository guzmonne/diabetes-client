import Component from './component.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  location: state.location.type,
});

const ConnectedComponent = connect(mapStateToProps)(Component);

ConnectedComponent.displayName = 'AppContainer';

export default ConnectedComponent;
