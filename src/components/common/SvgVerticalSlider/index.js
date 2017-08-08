import './style.css';
import React from 'react'
import T from 'prop-types'
import SliderInput, {
  width as sliderWidth,
  height as sliderHeight
} from './SliderInput.js';

class SvgVerticalSlider extends React.Component {
  constructor() {
    super();
    this.padding = 10;
  }

  render() {
    const {width, height, margin, rangeWidth, value} = this.props;
    const {min, max, step} = this.props;
    const middleX = width / 2 - margin.left - margin.right + rangeWidth / 2;
    const middleY = height / 2 - margin.left - margin.right + rangeWidth / 2;;
    const sliderX = middleX + this.padding;
    const sliderY = middleY - sliderWidth / 2;
    return (
      <svg data-component="SvgVerticalSlider"
        width={width}
        height={height}
        viewBox="0 0 400 400">
        <g data-slidebar-container>
          <circle data-slidebar-top
            cx={middleX}
            cy={margin.top}
            r={rangeWidth / 2}
          />
          <circle data-slidebar-bottom
            cx={middleX}
            cy={height - margin.top}
            r={rangeWidth / 2}
          />
          <rect data-slidebar
            x={width / 2 - margin.left - margin.right}
            y={margin.top}
            width={rangeWidth}
            height={height - margin.top - margin.bottom}
          />
        </g>
        <g data-input-container
          transform={`translate(${sliderX}, ${sliderY}) rotate(90, 40, 55)`}
        >
          <SliderInput />
        </g>
        <g data-input-container
          transform={`translate(${
            sliderX + sliderWidth / 2 - 7
          }, ${
            sliderY + sliderHeight / 2 + 8
          })`}
        >
          <text data-input-text x={0} y={0}>
            {(Math.round(value * 100) / 100).toFixed(2)}
          </text>
        </g>
        
      </svg>
    )
  }
}

SvgVerticalSlider.propTypes = {
  width: T.number,
  height: T.number,
  rangeWidth: T.number,
  value: T.number,
  min: T.number,
  max: T.number,
  step: T.number,
  margin: T.shape({
    top: T.number,
    right: T.number,
    bottom: T.number,
    left: T.number,
  })
};

SvgVerticalSlider.defaultProps = {
  width: 400,
  height: 400,
  rangeWidth: 20,
  value: 0,
  min: 0,
  max: 22,
  step: 0.1,
  margin: {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  }
};

export default SvgVerticalSlider
