import React from 'react';
import T from 'prop-types';
import AngleLeft from './AngleLeft.js';
import Times from './Times.js';

const ICONS = {
  AngleLeft,
  Times,
};

const Icon = ({type, ...props}) => (
  React.createElement(ICONS[type], props)
);

Icon.propTypes = {
  type: T.string,
};

export default Icon;
