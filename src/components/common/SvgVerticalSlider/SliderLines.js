import React from 'react';
import T from 'prop-types';
import range from 'lodash/range';

export const width = 90;
export const height = 400;

const MARGIN_RIGHT = 10;
const MICRO_LENGTH = 20;
const MIN_LENGTH = 40;
const MED_LENGTH = 60;
const MAX_LENGTH = 80;

const calculateInitialLineStart = (lines, i, valueLine) => {
  const result = (
    (lines - i) === valueLine
    ? MAX_LENGTH
    : (lines - i) === valueLine - 1
      ? MED_LENGTH
      : (lines - i) < valueLine
        ? MIN_LENGTH
        : MICRO_LENGTH
  );
  return width - result;
}

const SliderLines = ({min, max, step, padding, value}) => {
  const maxLine = padding;
  const minLine = height - padding;
  const space = Math.round(max - min, 0);
  const domain = Math.round(minLine - maxLine, 0)
  const lines = space / step;
  const linePadding = domain / lines;
  const valueLine = Math.ceil(value / step, 0);
  return (
    <svg width={width} height={height}>
    {range(0, lines + 1).map(i => (
      <line data-slider-line
        key={i}
        x1={calculateInitialLineStart(lines, i, valueLine)}
        y1={maxLine + i * linePadding}
        x2={width - MARGIN_RIGHT}
        y2={maxLine + i * linePadding}
      />
    ))}
    </svg>
  )
};

SliderLines.propTypes = {
  min: T.number,
  max: T.number,
  step: T.number,
  padding: T.number,
  value: T.number,
};

SliderLines.defaultProps = {
  min: 0,
  max: 20,
  step: 1,
  padding: 40,
  value: 0,
};

export default SliderLines;
