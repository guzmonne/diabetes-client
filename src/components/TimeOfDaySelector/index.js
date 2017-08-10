import './style.css';
import React from 'react';
import T from 'prop-types';
import Icon from '../common/Icon/';
import CircleButton from '../common/CircleButton/';

const MIN_WIDTH = 366;
const DIAMETER = 90;
const FONT_SIZE = 16;
const ICON_SIZE = 60;

const TimeOfDaySelector = ({value, onChange}) => {
  const pageWidth = document.body.offsetWidth;
  const scale = pageWidth < MIN_WIDTH ? pageWidth / MIN_WIDTH : 1;
  const diameter = DIAMETER * scale;
  const fontSize = FONT_SIZE * scale;
  const iconSize = ICON_SIZE * scale;
  return (
    <div data-component="TimeOfDaySelector">
      
      <div data-row>
        <CircleButton 
          diameter={diameter} 
          color="blue"
          style={{fontSize}}>
          Antes
        </CircleButton>
        
        <CircleButton 
          diameter={diameter} 
          disabled={true}>
          <Icon width={iconSize} height={iconSize} name="breakfast"/>
        </CircleButton>
        
        <CircleButton 
          diameter={diameter} 
          color="olive"
          style={{fontSize}}
          {...Object.assign({},
            (true && {'data-selected': true})
          )}>
          Despues
        </CircleButton>
      </div>

      <div data-row>
         <CircleButton 
          diameter={diameter} 
          color="blue"
          style={{fontSize}}>
          Antes
        </CircleButton>

        <CircleButton diameter={diameter} disabled={true}>
          <Icon width={iconSize} height={iconSize} name="lunch"/>
        </CircleButton>
      
        <CircleButton
          diameter={diameter}
          style={{fontSize}}
          color="navy">
          Despues
        </CircleButton>
      </div>

      <div data-row>
        <CircleButton 
          diameter={diameter} 
          color="blue"
          style={{fontSize}}>
          Antes
        </CircleButton>

        <CircleButton diameter={diameter} disabled={true}>
          <Icon width={iconSize} height={iconSize} name="coffee"/>
        </CircleButton>
      
        <CircleButton
          diameter={diameter}
          color="navy"
          style={{fontSize}}>
          Despues
        </CircleButton>
      </div>

      <div data-row>
        <CircleButton 
          diameter={diameter} 
          color="blue"
          style={{fontSize}}>
          Antes
        </CircleButton>
      
        <CircleButton diameter={diameter} disabled={true}>
          <Icon width={iconSize} height={iconSize} name="dinner"/>
        </CircleButton>
      
        <CircleButton
          diameter={diameter}
          color="navy"
          style={{fontSize}}>
          Despues
        </CircleButton>
      </div>

    </div>
  );
}


TimeOfDaySelector.propTypes = {
  value: T.string,
  onChange: T.func.isRequired,
};

export default TimeOfDaySelector;
