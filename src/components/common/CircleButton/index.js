import './style.css';
import React from 'react';
import T from 'prop-types';
import withRipple from '../Ripple/';

const CircleButton = ({diameter, children, color, style, ...rest}) => (
  <button data-component="CircleButton" 
    style={Object.assign({
      width: `${diameter}px`, 
      height: `${diameter}px`,
    }, (
      color ? {backgroundColor: `var(--${color})`} : undefined
    ), style)} 
    type="button"
    {...rest}
  >
    {children}
  </button>
);

CircleButton.propTypes = {
  diameter: T.oneOfType([T.number, T.string]),
  children: T.node,
  color: T.string,
  style: T.object,
};

CircleButton.defaultProps = {
  diameter: 3,
  style: {},
};

export default withRipple(CircleButton);
