import React from 'react';
import T from 'prop-types';
import {connect} from 'react-redux';
import SuccessAnimation from '../common/SuccessAnimation/';
import Button from '../common/Button/';

const Success = ({linkToHome}) => (
  <div data-component="Success">
    <SuccessAnimation />
    <Button
      type="info"
      block
      onClick={linkToHome}>
      Listo!
    </Button>
  </div>
)

Success.propTypes = {
  linkToHome: T.func,
}

Success.defaultProps = {
  linkToHome: () => {},
}

const ConnectedSuccess = connect(() => ({}), (dispatch) => ({
  linkToHome: () => dispatch({type: 'HOME'}),
}))(Success)

ConnectedSuccess.displayName = 'ConnectedSuccess';

export default ConnectedSuccess;
