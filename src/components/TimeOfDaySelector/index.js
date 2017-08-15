import './style.css';
import React from 'react';
import T from 'prop-types';
import Svg from '../common/Svg/';
import SelectorButton from './SelectorButton.js';

const MIN_WIDTH = 366;
const DIAMETER = 90;
const FONT_SIZE = 16;
const ICON_SIZE = 60;
const MEALS = ['breakfast', 'lunch', 'coffee', 'dinner'];
const MEALS_NAMES = ['Desayuno', 'Almuerzo', 'Merienda', 'Cena'];

const TimeOfDaySelector = ({value, previousValue, onChange}) => {
  const pageWidth = document.body.selectValueWidth;
  const scale = pageWidth < MIN_WIDTH ? pageWidth / MIN_WIDTH : 1;
  const diameter = DIAMETER * scale;
  const fontSize = FONT_SIZE * scale;
  const iconSize = ICON_SIZE * scale;
  return (
    <div data-component="TimeOfDaySelector">
    {MEALS.map((meal, i) => (
      <div data-row key={meal}>
        <SelectorButton
          value={value}
          previousValue={previousValue}
          diameter={diameter}
          fontSize={fontSize}
          selectValue={2 * i + 1}
          onClick={onChange}
        >Antes</SelectorButton>
        
        <div data-icon style={{width: diameter}}>
          <Svg width={iconSize} height={iconSize} name={meal}/>
          <h4>{MEALS_NAMES[i]}</h4>
        </div>
        
        <SelectorButton
          value={value}
          previousValue={previousValue}
          diameter={diameter}
          fontSize={fontSize}
          selectValue={2 * i + 2}
          onClick={onChange}
        >Despues</SelectorButton>
      </div>
    ))}
    </div>
  );
}


TimeOfDaySelector.propTypes = {
  value: T.number,
  previousValue: T.number,
  onChange: T.func.isRequired,
};

TimeOfDaySelector.defaultProps = {
  previousValue: 0,
};

export default TimeOfDaySelector;
