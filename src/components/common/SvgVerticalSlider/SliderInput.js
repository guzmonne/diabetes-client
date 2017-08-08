import React from 'react';
import T from 'prop-types';

const SliderInput = () => (
  <svg width="80" height="120">
    <rect data-input-point-transparent
      x={50}
      y={50}
      width={40}
      height={40}
      transform={`rotate(45, 40, 40)`}
    />
    <circle data-input
      cx={40}
      cy={40}
      r={40}
    />
    <rect data-input-point
      x={40}
      y={40}
      width={40}
      height={40}
      transform={`rotate(45, 40, 40)`}
    />
    <circle data-input-inner
      cx={40}
      cy={40}
      r={30}
    />
  </svg>
);

export default SliderInput;

export const width = 80;
export const height = 110;
