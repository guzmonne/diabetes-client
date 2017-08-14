import React from 'react';
import T from 'prop-types';

const AngleLeft = ({fill, width, height}) => (
  <svg fill={fill} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z"/></svg>
);

AngleLeft.propTypes = {
  fill: T.string,
  width: T.number,
  height: T.number,
};

AngleLeft.defaultProps = {
  fill: 'black',
  width: 64,
  height: 64,
};

export default AngleLeft;