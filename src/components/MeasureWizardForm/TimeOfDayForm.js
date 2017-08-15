import './style.css';
import React from 'react';
import T from 'prop-types';
import TimeOfDaySelector from '../TimeOfDaySelector/';
import Header from './Header.js';
import Button from '../common/Button/';

const TimeOfDayForm = ({
  onTimeOfDayChange,
  timeOfDayValue,
  cancelForm,
  prevPage,
  nextPage
}) => (
  <div data-component="TimeOfDayForm">
    <Header 
      title="Hora del día (2/2)"
      prevPage={prevPage}
      cancelForm={cancelForm}  
    />
    <TimeOfDaySelector onChange={onTimeOfDayChange} value={timeOfDayValue}/>
    <div data-next-button>
      <Button 
        type="info"
        block
        onClick={nextPage}>
        Siguiente
      </Button>
    </div>
  </div>
);

TimeOfDayForm.propTypes = {
  onGlucoseLevelChange: T.func,
  nextPage: T.func,
  prevPage: T.func,
  cancelForm: T.func,
  glucoseValue: T.number,
};

export default TimeOfDayForm;
