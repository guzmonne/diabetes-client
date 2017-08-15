import React from 'react';
import T from 'prop-types';
import IconCircleButton from '../common/IconCircleButton/';

const DIAMETER = 40;

const Header = ({prevPage, cancelForm, title}) => (
  <div data-header>
    <IconCircleButton 
      disabled={!prevPage}
      icon="AngleLeft"
      diameter={DIAMETER}
      onClick={(e) => prevPage && prevPage(e)}
    />
    <h4 data-title>{title}</h4>
    <IconCircleButton 
      icon="Times" 
      type="default"        
      diameter={DIAMETER}
      onClick={(e) => cancelForm && cancelForm(e)}
    />
  </div>
);

Header.propTypes = {
  title: T.string,
  prevPage: T.func,
  cancelForm: T.func,
};

Header.defaultProps = {
  title: '',
};

export default Header;
