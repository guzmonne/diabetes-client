import Component from './component.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({});

const mapActionsToProps = (dispatch) => ({
  linkToStatistics: () => dispatch({type: 'STATISTICS'}),
  linkToMeasure: () => dispatch({type: 'MEASURE'}),
  linkToConfiguration: () => dispatch({type: 'CONFIGURATION'}),
})

const ConnectedComponent = (
  connect(mapStateToProps, mapActionsToProps)(Component)
);

ConnectedComponent.displayName = 'HomeContainer';

export default ConnectedComponent;
