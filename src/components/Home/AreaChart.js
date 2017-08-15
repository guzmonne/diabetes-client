import React from 'react';
import T from 'prop-types';

const AreaChart = ({fill, scale}) => (
  <svg width={512 * scale} height={512 * scale} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill={fill} d="M500 400c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v324h452zM390.6 143.3l85.9 200.3c1.7 4-1.2 8.4-5.5 8.4H102c-3.3 0-6-2.7-6-6v-86.7c0-2.2.6-4.3 1.7-6.2l87.2-145.4c3.7-6.2 12.1-7.7 17.8-3.2l101.4 81.1c4.6 3.7 11.1 3.5 15.5-.4l52-46.2c6.1-5.4 15.7-3.2 19 4.3zM144 304h263.2l-41.1-95.9-22.2 19.8-26.5 23.5c-2.2 1.9-5.5 2-7.7.2L282 229.5l-77.1-61.7L144 269.3V304z"/>
  </svg>
);

AreaChart.propTypes = {
  fill: T.string,
  scale: T.number,
};

AreaChart.defaultProps = {
  fill: '#ffffff',
  scale: 1,
};

export default AreaChart;
