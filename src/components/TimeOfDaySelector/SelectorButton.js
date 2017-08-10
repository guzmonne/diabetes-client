import React from 'react';
import T from 'prop-types';
import CircleButton from '../common/CircleButton/';
import max from 'lodash/max';

const SelectorButton = ({
  onClick,
  diameter,
  value,
  previousValue,
  selectValue,
  fontSize,
  children
}) => (
  <CircleButton
    onClick={(e) => {
      e.preventDefault();
      onClick(selectValue);
    }}
    diameter={diameter} 
    color={value === selectValue 
      ? 'olive' 
      : max([value, previousValue]) < selectValue ? 'blue' : 'gray'}
    disabled={previousValue >= selectValue && value !== selectValue}
    style={{fontSize}}
    {...Object.assign({},
      (value === selectValue && {'data-selected': true})
    )}>
    {children}
  </CircleButton>
);

SelectorButton.propTypes = {
  onClick: T.func,
  diameter: T.number,
  value: T.number,
  previousValue: T.number,
  fontSize: T.number,
  selectValue: T.number,
  children: T.node,
};

SelectorButton.defaultProps = {
  previousValue: 0,
};

export default SelectorButton;
