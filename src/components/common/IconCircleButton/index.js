import './style.css';
import React from 'react';
import T from 'prop-types';
import Icon from '../Icon/';
import Button from '../Button/';

const IconCircleButton = ({diameter, icon, padding, onClick, ...props}) => (
  <div data-component="IconCircleButton">
    <Button 
      onClick={onClick}
      circle
      {...props}
    >
      <Icon type={icon}
        onClick={onClick}  
        width={diameter - padding}
        height={diameter - padding}
        fill="white" 
      /> 
    </Button>
  </div>
);

IconCircleButton.propTypes = {
  diameter: T.number,
  icon: T.string,
  padding: T.number,
};

IconCircleButton.defaultProps = {
  icon: 'angleLeft',
  padding: 5,
};

export default IconCircleButton;
