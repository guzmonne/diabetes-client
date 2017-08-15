import './style.css';
import React from 'react';
import T from 'prop-types';
import withRipple from '../Ripple/';

const Button = ({block, type, circle, children, ...props}) => (
  <button data-component="Button"
    data-block={block}
    data-type={type}
    data-circle={circle}
    {...props}>
    {children}
  </button>
)

Button.propTypes = {
  type: T.oneOf(['default', 'success', 'warning', 'danger', 'info']),
  block: T.bool,
};

Button.defaultProps = {
  type: 'default',
  block: false,
};

export default withRipple(Button);
