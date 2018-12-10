import React from 'react';
import PropTypes from 'prop-types';
import {LookupField} from '../../elements';
import './Widget.css';

/**
 * Widget as Stateless Element
 * I'd rather use REACT.MEMO here but jest is not supporting it for now.
 *
 */

//Functional Component
const Widget = (props) => (
  <div className="widget">
    <div className="panel panel-info">
      <div className="panel-heading">
        Weather in <b>{props.city}</b>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          Temperature: <b>{props.temp}°C</b>
        </li>
        <li className="list-group-item">
          Humidity: <b>{props.humidity}</b>
        </li>
        <li className="list-group-item">
          Wind: <b>{props.wind}</b>
        </li>
        <li className="list-group-item">
          <LookupField
            submitHandler={props.submitHandler}
            defaultValue={props.city}
          />
        </li>
      </ul>
    </div>
  </div>
);

//PropTypes
Widget.propTypes = {
  submitHandler: PropTypes.func,
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
};

// Sane defaults
Widget.defaultProps = {
  city: '--',
  temp: 0,
  humidity: 0,
  wind: '--',
  submitHandler: () => {
    console.log('nothing bound on submit');
  }
};

//etc

export default Widget;
