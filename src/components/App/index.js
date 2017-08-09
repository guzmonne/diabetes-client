import './style.css'
import React, { Component } from 'react';
import HorizontalSlider from '../common/HorizontalSlider/';
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
        <HorizontalSlider />
        <SvgVerticalSlider value={value} onChange={onSvgVerticalSliderChange}/>
      </div>
    );
  }
}

export default App;
