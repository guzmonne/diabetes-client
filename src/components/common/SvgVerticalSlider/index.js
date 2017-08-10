import './style.css';
import React from 'react'
import T from 'prop-types'
import SliderBar from './SliderBar.js';
import SliderInput, {
  width as sliderWidth,
  height as sliderHeight
} from './SliderInput.js';
import SliderLines from './SliderLines.js';

const d3 = Object.assign({}, require('d3-scale'), require('d3-interpolate'));

const AXIS_PADDING = 60,
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
    this.setMainColor = this.setMainColor.bind(this);
    // Initial state.
    this.state = {
      dragging: false,
    };
  }

  componentDidMount() {
    this.pt = this.svg.createSVGPoint();
    this.svg.addEventListener('touchmove', this.drag, {passive: false});
    this.forceUpdate();
  }

  componentWillUnmount() {
    this.svg.removeEventListener('touchmove', this.drag);
  }

  cursorPoint(e) {
    this.pt.x = e.clientX;
    this.pt.y = e.clientY;
    return this.pt.matrixTransform(this.svg.getScreenCTM().inverse());
  }

  moveSlider(e) {
    let {clientX, clientY} = this.state.touch ? e.touches[0] : e;
    let {y} = this.cursorPoint({
      clientX,
      clientY: clientY + this.offsetY,
    });
    this.props.onChange(this.scale.invert(y));
  }

  startDrag(touch, e) {
    let {clientX, clientY} = touch ? e.touches[0] : e;
    let {y} = this.cursorPoint({clientX, clientY});
    const currentY = this.scale(this.props.value);
    this.offsetY = currentY - y;
    this.setState({
      dragging: true,
      touch: touch === true,
    });
    this.drag(e);
  }

  drag(e){
    try {
      if (!this.props.onChange || this.state.dragging === false) return;
      e.preventDefault();
      this.moveSlider(e)
    } catch (error) {
      return;
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
    const {
      min,
      max,
      height,
      exponent,
      fromColor,
      toColor,
    } = this.props;
    this.scale = (
      d3.scaleLinear()
        .domain([min, max])
        .range([height - sliderWidth + SLIDER_Y_OFFSET, SLIDER_Y_OFFSET])
        .clamp(true)
    );
    this.interpolate = d3.interpolateHsl(fromColor, toColor);
    this.colorScale = (
      d3.scalePow()
        .domain([min, max])
        .range([0, 1])
        .exponent(exponent)
        .nice()
        .clamp(true)
    );
  }

  setMainColor() {
    if (!this.svg) return;
    const {value} = this.props;
    const color = this.interpolate(this.colorScale(value));
    this.svg.style.setProperty('--svg-vertical-slider-color', color);
  }

  render() {
    const {width, height, value, max, min, step} = this.props;
    this.scale || this.createScale();
    const sliderX = AXIS_PADDING + INPUT_PADDING;
    const sliderY = this.scale(value);
    this.setMainColor();
    return (
      <svg data-component="SvgVerticalSlider"
        width={width}
        height={height}
        onMouseMove={this.drag}
        onMouseUp={this.endDrag}
        onMouseLeave={this.endDrag}
        onTouchEnd={this.endDrag}
        onClick={this.moveSlider}
        ref={c => this.svg || (this.svg = c)}>
        <g data-slidebar-container transform={`translate(${AXIS_PADDING})`}>
          <SliderBar />
        </g>
        <g data-input-container
          onMouseDown={this.startDrag.bind(this, false)}
          onTouchStart={this.startDrag.bind(this, true)}
          transform={`translate(${sliderX}, ${sliderY}) rotate(90, 40, 55)`}
        >
          <SliderInput />
        </g>
        <g data-input-container
          onMouseDown={this.startDrag.bind(this, false)}
          onTouchStart={this.startDrag.bind(this, true)}
          transform={`translate(${
            sliderX + sliderWidth / 2 - TEXT_X_OFFSET
          }, ${
            sliderY + sliderHeight / 2 + TEXT_Y_OFFSET
          })`}
        >
          <text data-input-text 
            x={0} 
            y={0}
          >
            {this.sliderValue()}
          </text>
        </g>
        <g data-slider-lines>
          <SliderLines max={max} min={min} step={step} value={value}/>
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
  exponent: T.number,
  fromColor: T.string,
  toColor: T.string,
};

SvgVerticalSlider.defaultProps = {
  width: 180,
  height: 400,
  value: 10,
  min: 0,
  max: 20,
  step: 1,
  exponent: 0.6,
  fromColor: '#2ECC40',
  toColor: '#FF4136',
};

export default SvgVerticalSlider
