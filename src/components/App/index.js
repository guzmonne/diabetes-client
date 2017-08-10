import './style.css'
import React, { Component } from 'react';
import TimeOfDaySelector from '../TimeOfDaySelector/'

class App extends Component {
  constructor() {
    super();
    // Bind functions.
    this.onSvgVerticalSliderChange = this.onSvgVerticalSliderChange.bind(this);
    this.onTimeOfDayChange = this.onTimeOfDayChange.bind(this);
    // Initial state.
    this.state = {
      sliderValue: 5,
      timeOfDayValue: 0,
      previoustimeOfDayValue: 2
    };
  }

  onSvgVerticalSliderChange(value) {
    this.setState({sliderValue: value});
  }

  onTimeOfDayChange(value) {
    this.setState({timeOfDayValue: value});
  }

  render() {
    const {previoustimeOfDayValue, timeOfDayValue} = this.state;
    const {onTimeOfDayChange} = this;

    return (
      <div data-component="App">
        <TimeOfDaySelector
          onChange={onTimeOfDayChange}
          value={timeOfDayValue}
          previousValue={previoustimeOfDayValue}
        />
      </div>
    );
  }
}

export default App;
