import range from 'lodash/range';
import random from 'lodash/random';

const POINTS = 200;
const Y_MAX = 15;
const Y_MIN = 5;
const TO = Date.now();
const FROM = TO - 1000 * 60 * 60 * 24 * 30;
/*                  ms    s    m    h    d  = 30 days*/             
const X_MIN_INTERVAL = 1000 * 60 * 60 * 4;
/*                       ms    s    m    h  = 4 hours*/                  
const X_MAX_INTERVAL = 1000 * 60 * 60 * 12;
/*                       ms    s    m    h  = 12 hours*/
console.log(TO, FROM);
let previousTime = 0;            
export default range(POINTS).reduce((acc, i) => {
  previousTime += random(X_MIN_INTERVAL, X_MAX_INTERVAL);;
  const date = TO - previousTime;
  if (FROM > date) return acc;
  acc.push({
    date,
    value: random(Y_MIN, Y_MAX),
  });
  return acc;
}, []).reverse();
