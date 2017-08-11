import React from 'react';
import {
  VictoryChart,
  VictoryArea,
  VictoryAxis,
  VictoryBrushContainer,
} from 'victory';
import moment from 'moment';
import data from './data.js';
import theme from './theme.js';
import GradientArea from './GradientArea.js'

moment.locale('es');

const PADDING = 0;
const WIDTH = document.body.offsetWidth - PADDING;

class AreaChart extends React.Component {
  constructor() {
    super();
    // Bind functions.
    this.domainChange = this.domainChange.bind(this);
    // Initial state.
    const initialDomain = [
      data[data.length -1].date,
      data[data.length -1].date -  1000 * 60 * 60 * 24 * 7
    ];
    this.state = {
      initialDomain,
      xDomain: initialDomain,
    };
  }

  domainChange({x}) {
    this.setState({xDomain: x})
  }
  
  render() {
    return (
      <div>
        <VictoryChart 
          padding={{top: 20, right: 20, bottom: 30, left: 30}}
          height={WIDTH / (16 / 9)}
          width={WIDTH}
          domain={{
            x: this.state.xDomain,
            y: [0, 20]
          }}
          domainPadding={1}
          theme={theme}>
          <VictoryAxis 
            fixLabelOverlap={true}
            scale="time"
            style={{
              axisLabel: {padding: 30},
              tickLabels: {fontSize: 9, padding: 5}
            }}  
          />
          <VictoryAxis
            fixLabelOverlap={true}
            orientation="left"
            dependentAxis
          />
          <VictoryArea data={data}
            x='date'
            y='value'
            dataComponent={<GradientArea />}
            interpolation='natural'/>
        </VictoryChart>
        
        <VictoryChart
          padding={{top: 0, right: 20, bottom: 0, left: 30}}
          height={50}
          width={WIDTH}
          domain={{
            y: [0, 20]
          }}
          domainPadding={1}
          theme={theme}
          containerComponent={
            <VictoryBrushContainer 
              onDomainChange={this.domainChange}
              dimension="x"
              selectedDomain={{x: this.state.initialDomain}}
            />
          }
        >
          <VictoryAxis 
            fixLabelOverlap={true}
            label="Fecha"
            scale="time"
            style={{
              axisLabel: {padding: 30},
              tickLabels: {fontSize: 9, padding: 5}
            }}  
          />
          <VictoryArea
            data={data}
            x='date'
            y='value'
            dataComponent={<GradientArea />}
            interpolation='natural'/>
        </VictoryChart>
      </div>
    );
  }
}

AreaChart.propTypes = {
  
};

AreaChart.defaultProps = {
  
};

export default AreaChart;
