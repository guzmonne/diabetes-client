import React from 'react';
import T from 'prop-types';
import SuccessAnimation from '../common/SuccessAnimation/';
import Button from '../common/Button/';

const Success = ({prevPage}) => (
  <div data-component="Success">
    <SuccessAnimation />
    <Button
      type="info"
      block
      onClick={prevPage}>
      Listo!
    </Button>
  </div>
)

Success.propTypes = {
  done: T.func,
}

Success.defaultProps = {
  done: () => {},
}

export default Success;
