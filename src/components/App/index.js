import './style.css'
import React, {Component} from 'react';
import T from 'prop-types';
import {Provider} from 'react-redux'; 
import Home from '../Home/';

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
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div data-component="App">
          <Home />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  store: T.object.isRequired,
};

export default App;
