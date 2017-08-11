import React from 'react'
import GlucoseForm from './GlucoseForm.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';

const PAGES = [GlucoseForm, Page2, Page3];

class MeasureWizardForm extends React.Component {
  constructor() {
    super();
    // Bind functions.
    this.onGlucoseLevelChange = this.onGlucoseLevelChange.bind(this);
    this.nextPage = this.nextPage.bind(this);
    // Initial State.
    this.state = {
      glucoseValue: 0,
      timeOfDayValue: 0,
      timeOfDayPreviousValue: 0,
      currentPage: 0,
    };
  }

  nextPage(e) {
    e.preventDefault();
    console.log('nextPage');
    this.setState((state) => ({currentPage: state.currentPage + 1}));
  }

  onGlucoseLevelChange(e) {
    this.setState({glucoseValue: e});
  }
  
  render() {
    const {onGlucoseLevelChange, nextPage} = this;
    const {currentPage, ...state} = this.state;
    const component = PAGES[currentPage];
    const page = React.createElement(component, {
      ...state,
      ...{onGlucoseLevelChange, nextPage}
    });
    return (
      <div data-component="MeasureWizardForm">
        {page}
      </div>
    )
  }
}

export default MeasureWizardForm
