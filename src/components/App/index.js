import './style.css'
import React, { Component } from 'react';
import TimeOfDaySelector from '../TimeOfDaySelector/'

class App extends Component {
  constructor() {
    super();
    // Bind functions.
    this.onSvgVerticalSliderChange = this.onSvgVerticalSliderChange.bind(this);
    // Initial state.
    this.state = {
      sliderValue: 5,
      timeOfDayValue: undefined,
    };
  }

  onSvgVerticalSliderChange(value) {
    this.setState({sliderValue: value});
  }

  onTimeOfDayChange(value) {
    this.setState({timeOfDayValue: value});
  }

  render() {
    const {timeOfDayValue} = this.state;
    const {onTimeOfDayChange} = this;

    return (
      <div data-component="App">
        <TimeOfDaySelector onChange={onTimeOfDayChange} value={timeOfDayValue}/>
      </div>
    );
  }
}

export default App;
