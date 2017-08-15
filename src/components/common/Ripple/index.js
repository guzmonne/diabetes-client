import './style.css';
import React from 'react';
import T from 'prop-types';
import {TimelineMax} from 'gsap';

const RIPPLE_DURATION = 300;

function withRipple(Component) {
  class Ripple extends React.Component {
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

    getOffset(value, target) {
      if (target.nearestViewportElement)
        target = target.nearestViewportElement;
      return target[`offset${value}`] || target.parentElement[`offset${value}`]
    }
  
    handleClick(e) {
      const elem = this.circle,
        tl = new TimelineMax(),
        x = e.nativeEvent.offsetX,
        y = e.nativeEvent.offsetY,
        w = this.getOffset('Width', e.target),
        h = this.getOffset('Height', e.target),
        offsetX = Math.abs((w / 2) - x),
        offsetY = Math.abs((h / 2) - y),
        deltaX = (w / 2) + offsetX,
        deltaY = (h / 2) + offsetY,
        scaleRatio = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
      console.log({target: e.target, x, y, w, h});
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
      const {...props} = this.props;
      return (
        <div data-component="Ripple">
          {React.createElement(Component, Object.assign(
            props,
            {onClick: this.handleClick}
          ))}
          <svg data-ripple
            viewBox={`0 0 ${this.state.width} ${this.state.height}`}>
            <circle ref={c => this.circle = c} cx="1" cy="1" r="1" />
          </svg>
        </div>
      );
    }
  }
  
  Ripple.propTypes = {
    children: T.node,
  };

  return Ripple;
}

export default withRipple;
