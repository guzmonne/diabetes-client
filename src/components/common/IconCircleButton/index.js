import './style.css';
import React from 'react';
import T from 'prop-types';
import CircleButton from '../CircleButton/';
import AngleLeft from './icons/AngleLeft.js';
import Times from './icons/Times.js';

const ICONS = {
  AngleLeft,
  Times,
};

const IconCircleButton = ({diameter, icon, padding, ...props}) => (
  <div data-component="IconCircleButton" style={{
    width: diameter,
    height: diameter
  }}>
    <CircleButton diameter={diameter} {...props} />
    {React.createElement(ICONS[icon], {
      width: diameter - padding,
      height: diameter - padding,
      fill: 'white',
    })}
  </div>
);

IconCircleButton.propTypes = {
  diameter: T.number,
  icon: T.string,
  padding: T.number,
};

IconCircleButton.defaultProps = {
  icon: 'angleLeft',
  padding: 5,
};

export default IconCircleButton;
