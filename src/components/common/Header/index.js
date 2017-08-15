import './style.css';
import React from 'react';
import T from 'prop-types';
import {connect} from 'react-redux';
import IconCircleButton from '../IconCircleButton/';

const DIAMETER = 40;

const Header = ({prevPage, linkToHome, title}) => (
  <div data-component="Header">
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
      onClick={(e) => linkToHome && linkToHome(e)}
    />
  </div>
);

Header.propTypes = {
  title: T.string,
  prevPage: T.func,
  linkToHome: T.func,
};

Header.defaultProps = {
  title: '',
};

const ConnectedHeader = connect(() => ({}), (dispatch) => ({
  linkToHome: () => dispatch({type: 'HOME'}),
}))(Header)

ConnectedHeader.displayName = 'ConnectedHeader';

export default ConnectedHeader;
