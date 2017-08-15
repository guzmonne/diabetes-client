import './style.css'
import React, {Component} from 'react';
import T from 'prop-types';
import NotFound from '../NotFound/';
import Home from '../Home/';
import MeasureWizardForm from '../MeasureWizardForm/';
import Statistics from '../Statistics/'; 

class App extends Component {
  routeComponent(location) {
    switch(location) {
      case 'HOME': return Home;
      case 'MEASURE': return MeasureWizardForm;
      case 'STATISTICS': return Statistics;
      default: return NotFound;
    }
  }

  render() {
    const Component = this.routeComponent(this.props.location);
    return (
      <div data-component="App">
        <Component />
      </div>
    );
  }
}

App.propTypes = {
  location: T.string.isRequired,
};

export default App;
