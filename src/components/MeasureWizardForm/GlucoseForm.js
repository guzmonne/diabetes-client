import './style.css';
import React from 'react';
import T from 'prop-types';
import SvgVerticalSlider from '../common/SvgVerticalSlider/';
import Header from '../common/Header/';
import Button from '../common/Button/';

const GlucoseForm = ({
  onGlucoseLevelChange,
  glucoseValue,
  cancelForm,
  prevPage,
  nextPage
}) => (
  <div data-component="GlucoseForm">
    <Header 
      title="Nivel de glucosa (1/2)"
      prevPage={prevPage}
      cancelForm={cancelForm}  
    />
    <SvgVerticalSlider onChange={onGlucoseLevelChange} value={glucoseValue}/>
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

GlucoseForm.propTypes = {
  onGlucoseLevelChange: T.func,
  nextPage: T.func,
  prevPage: T.func,
  cancelForm: T.func,
  glucoseValue: T.number,
};

export default GlucoseForm;
