import './style.css'
import React from 'react'
const d3 = Object.assign({}, require('d3-scale'), require('d3-interpolate'));

const EXPONENT = 0.6;
const RANGE = [0, 1];
const DOMAIN = [2, 11];
const GREEN = '#2ECC40';
const RED = '#FF4136';

const interpolate = d3.interpolateHsl(GREEN, RED);
const scale = (
  d3.scalePow()
    .domain(DOMAIN)
    .range(RANGE)
    .exponent(EXPONENT)
    .nice()
    .clamp(true)
)

class Slider  extends React.Component {
  constructor() {
    super()
    // Bindings.
    this.onChange = this.onChange.bind(this);
    // Initial state.
    this.state = {
      value: 4.0,
    };
  }

  componentDidMount() {
    this.paintSlider(this.state.value);
  }

  paintSlider(value){
    this.ref.style.setProperty(
      `--slider-background-color`,
      interpolate(scale(value))
    );
  }

  onChange(event) {
    /**
     * Green:  127  63 49
     * Yellow:  52 100 50
     * Red:      3 100 61
     * / G--------------------- /
     * / --------Y------------- /
     * / ---------------------R /
     */
    event.preventDefault();
    this.setState({
      value: event.target.value
    });
    this.paintSlider(event.target.value);
  }

  render() {
    const {value} = this.state;
    return (
      <div data-component="Slider" ref={c => this.ref || (this.ref = c)}>
        <input value={value}
          type="range"
          min="0"
          max="22"
          step="0.1"
          onChange={this.onChange}/>
        <label data-output>{
          (Math.round(value * 100) / 100).toFixed(1)
        }</label>
      </div>
    )
  }
}

export default Slider
