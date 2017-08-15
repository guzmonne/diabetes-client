import './style.css';
import React from 'react'
import T from 'prop-types'
import AreaChart from './AreaChart.js';
import Cogs from './Cogs.js';
import Heartbeat from './Heartbeat.js';

const SCALE = 0.1;

class Home extends React.Component {
  render() {
    return (
      <div data-component="Home">
        <div data-charts>
          <AreaChart fill='rgb(124, 49, 154)' scale={SCALE}/>
          <h4 style={{color: 'rgb(124, 49, 154)'}}>Estadisticas</h4>
        </div>
        <div data-measure>
          <Heartbeat fill='rgb(222, 48, 47)' scale={SCALE}/>
          <h4 style={{color: 'rgb(222, 48, 47)'}}>Nueva Medida</h4>
        </div>
        <div data-configuration>
          <Cogs fill='rgb(1, 132, 199)' scale={SCALE}/>
          <h4 style={{color: 'rgb(1, 132, 199)'}}>Configuración</h4>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  something: T.number,
}

export default Home
