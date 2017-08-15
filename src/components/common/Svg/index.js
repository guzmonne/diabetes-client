import React from 'react';
import T from 'prop-types';
import breakfast from './svg/breakfast.svg';
import lunch from './svg/lunch-bold.svg';
import coffee from './svg/coffee-bold.svg';
import dinner from './svg/dinner.svg';

const ICONS = {
  breakfast,
  lunch,
  coffee,
  dinner,
};

const Icon = ({width, height, name}) => (
  <img data-component="Icon"
    style={{
      width: `${width}px`,
      height: `${height}px`
    }}
    src={ICONS[name]}
    alt="icon svg"
  />
);

Icon.propTypes = {
  width: T.oneOfType([T.number, T.string]),
  height: T.oneOfType([T.number, T.string]),
  name: T.string,
};

Icon.defaultProps = {
  width: 80,
  height: 80,
  name: 'coffee',
};

export default Icon;
