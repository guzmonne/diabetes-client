import './style.css';
import React from 'react';
import T from 'prop-types';

const CircleButton = ({diameter, children, ...rest}) => (
  <button data-component="CircleButton" 
    style={{width: `${diameter}px`, height: `${diameter}px`}} 
    type="button"
    {...rest}
  >
    {children}
  </button>
);

CircleButton.propTypes = {
  diameter: T.oneOfType([T.number, T.string]),
  children: T.node,
};

CircleButton.defaultProps = {
  diameter: 3,
};

export default CircleButton;
