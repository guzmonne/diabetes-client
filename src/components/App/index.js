import './style.css'
import React, { Component } from 'react';
import Icon from '../common/Icon/';
import CircleButton from '../common/CircleButton/';

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
        <CircleButton diameter="90" disabled={true}>
          <Icon width="60" height="60" name="breakfast"/>
        </CircleButton>
        <CircleButton diameter="90" disabled={true}>
          <Icon width="60" height="60" name="lunch"/>
        </CircleButton>
        <CircleButton diameter="90" disabled={true}>
          <Icon width="60" height="60" name="coffee"/>
        </CircleButton>
        <CircleButton diameter="90" disabled={true}>
          <Icon width="60" height="60" name="dinner"/>
        </CircleButton>
      </div>
    );
  }
}

export default App;
