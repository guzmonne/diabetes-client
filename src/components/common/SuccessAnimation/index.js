import './style.css';
import React from 'react';
import T from 'prop-types';

class SuccessAnimation extends React.Component {
  componentDidMount() {
    const {scale} = this.props;
    this.svg.style.setProperty('transform', `scale(${scale})`);
  }

  render() {
    const {color} = this.props;
    return (
      <svg
        data-component="SuccessAnimation"
        ref={c => this.svg = c}
        version="1.1"
        id="icon"
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 40 40"
        enableBackground="new 0 0 40 40"
      >
      <g data-blob></g>
      <g data-lines>
        <line fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="20"
          y1="1.4"
          x2="20"
          y2="3.6"/>
        <line fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="20"
          y1="36.4"
          x2="20"
          y2="38.6"/>
        <line fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="1.4"
          y1="20"
          x2="3.6"
          y2="20"/>
        <line fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="36.4"
          y1="20"
          x2="38.6"
          y2="20"/>
        <line fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="33.2"
          y1="6.8"
          x2="31.6"
          y2="8.4"/>
        <line fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="8.4"
          y1="31.6"
          x2="6.8"
          y2="33.2"/>
        <line fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="6.8"
          y1="6.8"
          x2="8.4"
          y2="8.4"/>
        <line fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="31.6"
          y1="31.6"
          x2="33.2"
          y2="33.2"/>
      </g>
      <g data-whiteblob>
        <circle fill="#FFFFFF" cx="20" cy="19.8" r="3.7"/>
      </g>
      <path data-circle
        fill={color}
        d="M31.5,12.8c-0.6-1-1.3-1.9-2.1-2.6c-2.4-2.5-5.7-4-9.4-4s-7,1.5-9.5,3.9c-0.8,0.8-1.5,1.7-2.1,2.6c-1.2,2-2,4.4-2,7s0.7,4.9,2,7c0.9,1.4,2,2.7,3.3,3.7c2.3,1.8,5.2,2.9,8.3,2.9s6-1.1,8.3-2.9c1.3-1,2.4-2.3,3.3-3.7c1.2-2,2-4.4,2-7S32.8,14.8,31.5,12.8z M26.8,30.4c-2,1.2-4.3,2-6.8,2s-4.8-0.7-6.8-2c-2.1-1.3-3.8-3.2-4.8-5.5c-0.7-1.6-1.1-3.3-1.1-5.1s0.4-3.6,1.1-5.1c0.8-1.7,1.9-3.3,3.4-4.5c2.2-1.9,5.1-3,8.2-3s6,1.1,8.2,3c1.4,1.2,2.6,2.8,3.4,4.5c0.7,1.6,1.1,3.3,1.1,5.1s-0.4,3.6-1.1,5.1C30.5,27.2,28.8,29.1,26.8,30.4z"
      />
      <path data-arrow
        fill={color}
        d="M25.8,15.3l-8.4,8.9l-3.2-2.6c-0.2-0.2-0.5-0.1-0.6,0.1c-0.2,0.2-0.1,0.5,0.1,0.6l3.8,3.1l9-9.5c0.2-0.2,0.2-0.5,0-0.6C26.2,15.1,25.9,15.1,25.8,15.3z"
      />
   </svg>
    );
  }
}

SuccessAnimation.propTypes = {
  scale: T.number,
  color: T.string,
};

SuccessAnimation.defaultProps = {
  scale: 0.8,
  color: "#2ECC40",
};

export default SuccessAnimation;
