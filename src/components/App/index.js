import './style.css'
import React, { Component } from 'react';
import AreaChart from '../common/AreaChart/';

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
    return (
      <div data-component="App">
        <AreaChart />
      </div>
    );
  }
}

export default App;
