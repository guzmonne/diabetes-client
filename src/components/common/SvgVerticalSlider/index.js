import './style.css';
import React from 'react'
import T from 'prop-types'
import SliderBar from './SliderBar.js';
import SliderInput, {
  width as sliderWidth,
  height as sliderHeight
} from './SliderInput.js';
import * as d3 from 'd3-scale';

const AXIS_PADDING = 80,
      INPUT_PADDING = 20,
      TEXT_X_OFFSET = 10,
      TEXT_Y_OFFSET = 8,
      SLIDER_Y_OFFSET = -15;

class SvgVerticalSlider extends React.Component {
  constructor() {
    super();
    this.sliderValue = this.sliderValue.bind(this);
    this.createScale = this.createScale.bind(this);
    this.cursorPoint = this.cursorPoint.bind(this);
    this.startDrag = this.startDrag.bind(this);
    this.drag = this.drag.bind(this);
    this.endDrag = this.endDrag.bind(this);
    this.moveSlider = this.moveSlider.bind(this);
    // Initial state.
    this.state = {
      dragging: false,
    };
  }

  componentDidMount() {
    this.pt = this.svg.createSVGPoint();
  }

  cursorPoint(e) {
    this.pt.x = e.clientX;
    this.pt.y = e.clientY;
    return this.pt.matrixTransform(this.svg.getScreenCTM().inverse());
  }

  moveSlider(e) {
    let {clientX, clientY} = this.state.touch ? e.touches[0] : e;
    let {y} = this.cursorPoint({clientX, clientY});
    y -= sliderHeight / 2;
    this.props.onChange(this.scale.invert(y));
  }

  startDrag(touch, e) {
    this.setState({
      dragging: true,
      touch: touch === true,
    });
  }

  drag(e){
    try {
      if (!this.props.onChange || this.state.dragging === false) return;
      this.moveSlider(e)
    } catch (error) {
      console.error(error);
    }
  }

  endDrag(e) {
    this.setState({
      dragging: false,
      touch: false,
    });
  }
  
  sliderValue() {
    return (Math.round(this.props.value * 100) / 100).toFixed(2)
  }

  createScale() {
    const {min, max, height} = this.props;
    return (
      d3.scaleLinear()
        .domain([min, max])
        .range([height - sliderWidth + SLIDER_Y_OFFSET, SLIDER_Y_OFFSET])
        .clamp(true)
    );
  }

  render() {
    console.log('render');
    const {width, height, value} = this.props;
    this.scale || (this.scale = this.createScale())
    const sliderX = AXIS_PADDING + INPUT_PADDING;
    const sliderY = this.scale(value);
    return (
      <svg data-component="SvgVerticalSlider"
        width={width}
        height={height}
        onMouseMove={this.drag}
        onMouseUp={this.endDrag}
        onMouseLeave={this.endDrag}
        onTouchMove={this.drag}
        onTouchEnd={this.endDrag}
        onClick={this.moveSlider}
        ref={c => this.svg || (this.svg = c)}>
        <g data-slidebar-container transform={`translate(${AXIS_PADDING})`}>
          <SliderBar />
        </g>
        <g data-input-container
          onMouseDown={this.startDrag}
          onTouchStart={this.startDrag.bind(this, true)}
          transform={`translate(${sliderX}, ${sliderY}) rotate(90, 40, 55)`}
        >
          <SliderInput />
        </g>
        <g data-input-container
          onMouseDown={this.startDrag}
          onTouchStart={this.startDrag.bind(this, true)}
          transform={`translate(${
            sliderX + sliderWidth / 2 - TEXT_X_OFFSET
          }, ${
            sliderY + sliderHeight / 2 + TEXT_Y_OFFSET
          })`}
        >
          <text data-input-text x={0} y={0}>{this.sliderValue()}</text>
        </g>
        
      </svg>
    )
  }
}

SvgVerticalSlider.propTypes = {
  onChange: T.func.isRequired,
  width: T.number,
  height: T.number,
  value: T.number,
  min: T.number,
  max: T.number,
  step: T.number,
};

SvgVerticalSlider.defaultProps = {
  width: 400,
  height: 400,
  value: 10,
  min: 0,
  max: 20,
  step: 0.1,
};

export default SvgVerticalSlider
