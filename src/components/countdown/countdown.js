import React from "react";
import moment from "moment";
import SVGCircle  from "./svg";
import './countdown.scss'
import {Col} from "reactstrap"

class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };
  constructor(props) {
    super(props);
    // this.polarToCartesian = this.polarToCartesian.bind(this);
    this.mapNumber = this.mapNumber.bind(this);
    // this.describeArc=this.describeArc.bind(this)
   
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment("01 21 2022", timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("DDD");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }
 

  // From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
  
  // From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  mapNumber = (number, in_min, in_max, out_min, out_max) => {
    return (
      ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    // Mapping the date values to radius values
    const daysRadius = this.mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = this.mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = this.mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = this.mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
      return null;
    }

    return (
      <div>
        <div className="countdown-wrapper">
          {days && (
            <Col className="countdown-item" xs={3}>
           
              <span className="time">{days}</span>

              <span className="subtitle">Nights</span>
            </Col>
          )}
          {hours && (
            <Col xs={3} className="countdown-item">
              
              <span className="time">{hours}</span>
              <span className="subtitle">hours</span>
            </Col>
          )}
          {minutes && (
            <Col xs={3} className="countdown-item">
             
              <span className="time">{minutes}</span>
              <span className="subtitle">minutes</span>
            </Col>
          )}
          {seconds && (
            <Col xs={3} className="countdown-item">
             
              <span className="time">{seconds}</span>
              <span className="subtitle">seconds</span>
            </Col>
          )}
        </div>
      </div>
    );
  }
}
export default Countdown;
