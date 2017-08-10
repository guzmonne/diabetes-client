import './style.css'
import React, { Component } from 'react';
import SvgVerticalSlider from '../common/SvgVerticalSlider/';

class App extends Component {
  constructor() {
    super();
    // Bind functions.
    this.onSvgVerticalSliderChange = this.onSvgVerticalSliderChange.bind(this);
    // Initial state.
    this.state = {
      value: 5,
    };
  }

  onSvgVerticalSliderChange(value) {
    this.setState({value});
  }

  render() {
    const {value} = this.state;
    const {onSvgVerticalSliderChange} = this;

    return (
      <div data-component="App">
        <SvgVerticalSlider onChange={onSvgVerticalSliderChange} value={value}/>
      </div>
    );
  }
}

export default App;
