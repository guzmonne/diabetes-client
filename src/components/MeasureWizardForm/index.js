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
    this.prevPage = this.prevPage.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
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

  prevPage(e) {
    e.preventDefault();
    console.log('prevPage');
    this.setState((state) => ({currentPage: Storage.currentPage - 1}));
  }

  cancelForm(e) {
    e.preventDefault();
    console.log('cancelForm');
  }

  onGlucoseLevelChange(e) {
    this.setState({glucoseValue: e});
  }
  
  render() {
    const {onGlucoseLevelChange, nextPage, prevPage, cancelForm} = this;
    const {currentPage, ...state} = this.state;
    const component = PAGES[currentPage];
    const page = React.createElement(component, Object.assign(
      state,
      (currentPage === 0 && {onGlucoseLevelChange, nextPage, cancelForm}),
      (currentPage > 0 && {prevPage})
    ));
    return (
      <div data-component="MeasureWizardForm">
        {page}
      </div>
    )
  }
}

export default MeasureWizardForm
