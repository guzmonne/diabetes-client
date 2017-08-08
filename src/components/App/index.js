import './style.css'
import React, { Component } from 'react';
import HorizontalSlider from '../common/HorizontalSlider/';
import SvgVerticalSlider from '../common/SvgVerticalSlider/';

class App extends Component {
  render() {
    return (
      <div data-component="App">
        <HorizontalSlider />
        <SvgVerticalSlider />
      </div>
    );
  }
}

export default App;
