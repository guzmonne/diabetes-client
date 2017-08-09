import React from 'react';
import T from 'prop-types';

export const width = 20;
export const height = 400;

const SliderBar = ({width, height}) => (
  <svg width={width} height={height}>
    <circle data-slidebar-top cx={width / 2} cy={width / 2} r={width / 2} />
    <circle data-slidebar-bottom 
      cx={width / 2}
      cy={height - width / 2}
      r={width / 2}
    />
    <rect data-slidebar
      x={0}
      y={width / 2}
      width={width}
      height={height - width}
    />
  </svg>
);

SliderBar.propTypes = {
  width: T.number,
  height: T.number,
}

SliderBar.defaultProps = {
  width,
  height,
}

export default SliderBar;
