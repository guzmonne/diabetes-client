import React from 'react';
import data from './data.js';
import {
  VictoryChart,
  VictoryArea,
  VictoryTheme,
  VictoryAxis,
  VictoryBrushContainer,
} from 'victory';
import moment from 'moment';

moment.locale('es');

const PADDING = 0;
const WIDTH = document.body.offsetWidth - PADDING;

class LineChart extends React.Component {
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
          width={WIDTH}
          domain={{
            x: this.state.xDomain,
            y: [0, 20]
          }}
          theme={VictoryTheme.material}>
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
          <VictoryArea data={data} x='date' y='value'/>
        </VictoryChart>
        
        <VictoryChart
          height={150}
          width={WIDTH}
          domain={{
            y: [0, 20]
          }}
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
          <VictoryArea data={data} x='date' y='value'/>
        </VictoryChart>
      </div>
    );
  }
}

LineChart.propTypes = {
  
};

LineChart.defaultProps = {
  
};

export default LineChart;
