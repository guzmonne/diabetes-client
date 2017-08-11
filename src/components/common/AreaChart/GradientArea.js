import React from 'react';
import {Area} from 'victory-core';

class GradientArea extends Area {
  // This method exists in Area, and is completely overridden for the custom component.
  renderArea(path, style, events) {
    const gradientId = `gradient-${Math.random()}`;
    const areaStyle = Object.assign(
      {}, style, {fill: `url(${window.location.href}#${gradientId})`}
    );
    return (
      <g>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style={{stopColor: '#0074D9', stopOpacity: 1}}/>
            <stop offset="1" style={{stopColor: '#6AC6FF', stopOpacity: 0}}/>
          </linearGradient>
        </defs>
        <path key="area" style={areaStyle} d={path} {...events}/>
      </g>
    );
  }
}

export default GradientArea;
