import React from 'react';
import T from 'prop-types';

const Times = ({fill, width, height}) => (
  <svg fill={fill} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z"/></svg>
);

Times.propTypes = {
  fill: T.string,
};

Times.defaultProps = {
  fill: 'black',
};

export default Times;