import './style.css';
import React from 'react';
import T from 'prop-types';
import SvgVerticalSlider from '../common/SvgVerticalSlider/';
import IconCircleButton from '../common/IconCircleButton/';

const GlucoseForm = ({onGlucoseLevelChange, glucoseValue, nextPage}) => (
  <div data-component="GlucoseForm">
    <div data-header>
      <IconCircleButton disabled icon="AngleLeft" diameter={40}/>
      <h4 data-title>Valor de glucosa medida</h4>
      <IconCircleButton icon="Times" diameter={40}/>
    </div>
    
    <SvgVerticalSlider onChange={onGlucoseLevelChange} value={glucoseValue}/>
    <div data-next-button>
      <button onClick={nextPage}>Siguiente</button>
    </div>
  </div>
);

GlucoseForm.propTypes = {
  onGlucoseLevelChange: T.func,
  nextPage: T.func,
  glucoseValue: T.number,
};

export default GlucoseForm;
