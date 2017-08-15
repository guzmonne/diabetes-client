import './style.css';
import React from 'react';
import T from 'prop-types';
import SvgVerticalSlider from '../common/SvgVerticalSlider/';
import IconCircleButton from '../common/IconCircleButton/';
import Button from '../common/Button/';

const DIAMETER = 40;

const GlucoseForm = ({
  onGlucoseLevelChange,
  glucoseValue,
  cancelForm,
  prevPage,
  nextPage
}) => (
  <div data-component="GlucoseForm">
    <div data-header>
      <IconCircleButton 
        disabled={!prevPage}
        icon="AngleLeft"
        diameter={DIAMETER}
        onClick={(e) => prevPage && prevPage(e)}
      />
      <h4 data-title>Valor de glucosa medida</h4>
      <IconCircleButton 
        icon="Times" 
        type="default"        
        diameter={DIAMETER}
        onClick={(e) => cancelForm && cancelForm(e)}
      />
    </div>
    
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
