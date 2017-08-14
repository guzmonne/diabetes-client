import './style.css';
import React from 'react';
import T from 'prop-types';
import {TimelineMax} from 'gsap';
import omit from 'lodash/omit.js';

const RIPPLE_DURATION = 300;

class Button extends React.Component {
  constructor() {
    super();
    // Bind functions.
    this.handleClick = this.handleClick.bind(this);
    // Initial state.
    this.state = {
      width: 0,
      height: 0,
    };
  }

  handleClick(e) {
    const elem = this.circle,
      tl = new TimelineMax(),
      x = e.nativeEvent.offsetX,
      y = e.nativeEvent.offsetY,
      w = e.target.offsetWidth,
      h = e.target.offsetHeight,
      offsetX = Math.abs((w / 2) - x),
      offsetY = Math.abs((h / 2) - y),
      deltaX = (w / 2) + offsetX,
      deltaY = (h / 2) + offsetY,
      scaleRatio = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    this.setState({
      width: w,
      height: h,
    });
    tl.fromTo(elem, RIPPLE_DURATION / 1000, {
      x: x,
      y: y,
      transformOrigin: '50% 50%',
      scale: 0,
      opacity: 1,
    }, {
      scale: scaleRatio,
      opacity: 0,
    });
    if (this.props.onClick){
      e.persist();
      setTimeout(() => this.props.onClick(e), RIPPLE_DURATION);
    }
  } 

  render() {
    const {children, type, block, ...props} = this.props;
    return (
      <div data-component="Button">
        <button data-button
          data-block={block}
          data-type={type}
          onClick={this.handleClick}
          {...omit(props, 'onClick')}>
          {children}
        </button>
        <svg data-ripple
          viewBox={`0 0 ${this.state.width} ${this.state.height}`}>
          <circle ref={c => this.circle = c} cx="1" cy="1" r="1" />
        </svg>
      </div>
    );
  }
}

Button.propTypes = {
  type: T.oneOf(['default', 'success', 'warning', 'danger', 'info']),
  block: T.bool,
};

Button.defaultProps = {
  type: 'default',
  block: false,
};

export default Button
