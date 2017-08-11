import assign from 'lodash/assign.js';
/*
  "material" theme (VictoryTheme.material)
  Try changing the theme. You could start with `colors` or `fontSize`.
*/

// Colors
const navy = '#001F3F';
const blue = '#0074D9';
const aqua = '#7FDBFF';
const teal = '#39CCCC';
const olive = '#3D9970';
const green = '#2ECC40';
const lime = '#01FF70';
const yellow = '#FFDC00';
const orange = '#FF851B';
const red = '#FF4136';
const fuchsia = '#F012BE';
const purple = '#B10DC9';
const maroon = '#85144B';
const gray = '#AAAAAA';
const silver = '#DDDDDD';
const black = '#111111';
const colors = [
  navy,
  blue,
  aqua,
  teal,
  olive,
  green,
  lime,
  yellow,
  orange,
  red,
  fuchsia,
  purple,
  maroon,
];
const blueGrey50 = silver;
const blueGrey300 = gray;
const blueGrey700 = black;
const grey900 = black;
// Typography
const sansSerif = "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = "normal";
const fontSize = 9;

// Layout
const padding = 8;
const baseProps = {
  width: 350,
  height: 350,
  padding: 50
};

// Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700
};

const centeredLabelStyles = assign({textAnchor: "middle"}, baseLabelStyles);

// Strokes
const strokeDasharray = "10, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Put it all together...
export default {
  area: assign({
    style: {
      data: {
        fill: grey900
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  axis: assign({
    style: {
      axis: {
        fill: "transparent",
        stroke: blueGrey300,
        strokeWidth: 2,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: assign({}, centeredLabelStyles, {
        padding,
        stroke: "transparent"
      }),
      grid: {
        fill: "transparent",
        stroke: blueGrey50,
        strokeDasharray,
        strokeLinecap,
        strokeLinejoin
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: blueGrey300,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      tickLabels: assign({}, baseLabelStyles, {
        fill: blueGrey700,
        stroke: "transparent"
      })
    }
  }, baseProps),
  bar: assign({
    style: {
      data: {
        fill: blueGrey700,
        padding,
        stroke: "transparent",
        strokeWidth: 0,
        width: 5
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  candlestick: assign({
    style: {
      data: {
        stroke: blueGrey700
      },
      labels: centeredLabelStyles
    },
    candleColors: {
      positive: "#ffffff",
      negative: blueGrey700
    }
  }, baseProps),
  chart: baseProps,
  errorbar: assign({
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: assign({}, centeredLabelStyles, {
        stroke: "transparent",
        strokeWidth: 0
      })
    }
  }, baseProps),
  group: assign({
    colorScale: colors
  }, baseProps),
  line: assign({
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: assign({}, baseLabelStyles, {
        stroke: "transparent",
        strokeWidth: 0,
        textAnchor: "start"
      })
    }
  }, baseProps),
  pie: assign({
    colorScale: colors,
    style: {
      data: {
        padding,
        stroke: blueGrey50,
        strokeWidth: 1
      },
      labels: assign({}, baseLabelStyles, {
        padding: 20,
        stroke: "transparent",
        strokeWidth: 0
      })
    }
  }, baseProps),
  scatter: assign({
    style: {
      data: {
        fill: blueGrey700,
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: assign({}, centeredLabelStyles, {
        stroke: "transparent"
      })
    }
  }, baseProps),
  stack: assign({
    colorScale: colors
  }, baseProps),
  tooltip: assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles,
      flyout: {
        stroke: blueGrey700,
        strokeWidth: 1,
        fill: "#f0f0f0"
      }
    },
    flyoutProps: {
      cornerRadius: 10,
      pointerLength: 10
    }
  }, baseProps),
  voronoi: assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    }
  }, baseProps)
};
