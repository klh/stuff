import React from 'react';
import PropTypes from 'prop-types';
import {Widget} from '../';
import './WidgetWrapper.css';

/**
 * This could as easily be a stateless function
 * and sll these components could potentially be simpler, but writing it all in one big pile doesn't really show you anything
 *
 */

class WidgetWrapper extends React.Component {
  static propTypes = {
    wind: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired
  };

  submitHandler = (e) => {
    this.props.history.push(`/?city=${e.target.city.value}`);
    e.preventDefault();
  };

  render() {
    const {city, temp, wind, humidity} = this.props;

    return (
      <div className="widget__wrapper widget__weather">
        <h1>Weather Widget</h1>
        <Widget
          submitHandler={this.submitHandler}
          city={city}
          wind={wind}
          humidity={humidity}
          temp={temp}
        />
      </div>
    );
  }
}

export default WidgetWrapper;
