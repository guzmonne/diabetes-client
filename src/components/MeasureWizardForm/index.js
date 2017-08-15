import React from 'react'
import GlucoseForm from './GlucoseForm.js';
import TimeOfDayForm from './TimeOfDayForm.js';
import Success from './Success.js';

const PAGES = [GlucoseForm, TimeOfDayForm, Success];

class MeasureWizardForm extends React.Component {
  constructor() {
    super();
    // Bind functions.
    this.onGlucoseLevelChange = this.onGlucoseLevelChange.bind(this);
    this.onTimeOfDayChange = this.onTimeOfDayChange.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
    // Initial State.
    this.state = {
      glucoseValue: 0,
      timeOfDayValue: 0,
      timeOfDayPreviousValue: 0,
      currentPage: 2,
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
    this.setState((state) => ({currentPage: state.currentPage - 1}));
  }

  cancelForm(e) {
    e.preventDefault();
    console.log('cancelForm');
  }

  onGlucoseLevelChange(value) {
    this.setState({glucoseValue: value});
  }

  onTimeOfDayChange(value) {
    this.setState({timeOfDayValue: value})
  }
  
  render() {
    const {
      onGlucoseLevelChange,
      onTimeOfDayChange,
      nextPage,
      prevPage,
      cancelForm} = this;
    const {currentPage, ...state} = this.state;
    const component = PAGES[currentPage];
    const page = React.createElement(component, Object.assign(
      state,
      (currentPage === 0 && {onGlucoseLevelChange, nextPage, cancelForm}),
      (currentPage === 1 && {onTimeOfDayChange, nextPage, cancelForm}),
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
