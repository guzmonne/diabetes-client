import './style.css';
import React from 'react'
import T from 'prop-types'
import AreaChart from './AreaChart.js';
import Cogs from './Cogs.js';
import Heartbeat from './Heartbeat.js';
import withRipple from '../common/Ripple/';

const SCALE = 0.1;

const Statistics = withRipple(({onClick}) => (
  <div data-charts onClick={onClick}>
    <AreaChart fill='rgb(124, 49, 154)' scale={SCALE}/>
    <h4 style={{color: 'rgb(124, 49, 154)'}}>Estadisticas</h4>
  </div>
));

const Measurements = withRipple(({onClick}) => (
  <div data-measure onClick={onClick}>
    <Heartbeat fill='rgb(222, 48, 47)' scale={SCALE}/>
    <h4 style={{color: 'rgb(222, 48, 47)'}}>Nueva Medida</h4>
  </div>
));

const Configuration = withRipple(({onClick}) => (
  <div data-configuration onClick={onClick}>
    <Cogs fill='rgb(1, 132, 199)' scale={SCALE}/>
    <h4 style={{color: 'rgb(1, 132, 199)'}}>Configuración</h4>
  </div>
));

class Home extends React.Component {
  render() {
    const {linkToConfiguration, linkToMeasure, linkToStatistics} = this.props;
    return (
      <div data-component="Home">
        <Statistics onClick={linkToStatistics}/>
        <Measurements onClick={linkToMeasure}/>
        <Configuration onClick={linkToConfiguration}/>
      </div>
    );
  }
}

Home.propTypes = {
  linkToStatistics: T.func,
  linkToMeasure: T.func,
  linkToConfiguration: T.func,
}

export default Home
