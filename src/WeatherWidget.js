import React, {Component} from 'react';
import queryString from 'query-string'

import {getWeatherForCity} from "./api/endpoints";
import {WidgetWrapper} from './components/modules';

const defaultCity = "copenhagen";

const getCardinal = (angle) => {
    //this should really go in an utility library.

    const directions = 8;

    const degree = 360 / directions;
    angle = angle + degree / 2;

    if (angle >= 0 && angle < degree)
        return "Nord";
    if (angle >= degree && angle < 2 * degree)
        return "NordØst";
    if (angle >= 2 * degree && angle < 3 * degree)
        return "Øst";
    if (angle >= 3 * degree && angle < 4 * degree)
        return "SydØst";
    if (angle >= 4 * degree && angle < 5 * degree)
        return "Syd";
    if (angle >= 5 * degree && angle < 6 * degree)
        return "SydVest";
    if (angle >= 6 * degree && angle < 7 * degree)
        return "Vest";
    if (angle >= 7 * degree && angle < 8 * degree)
        return "NordVest";
    //Should never happen:
    return "Nord";
};

class WeatherWidget extends Component {

    parseWind = (wind) => {
        const {deg, speed} = wind;
        return `${speed} m/s ${getCardinal(deg)}`;
    };

    state = {
        city: this.props.weatherData.name,
        wind: this.parseWind(this.props.weatherData.wind),
        humidity: this.props.weatherData.main.humidity,
        temp: Math.round(this.props.weatherData.main.temp)
    };

    static async getInitialProps({req, res, match}) {

        const lookupCity = match.params.city ? match.params.city : req.query.city ? req.query.city : defaultCity;
        const response = await getWeatherForCity(lookupCity);
        const weatherData = response.data;
        return {weatherData};
    }

    componentDidMount() {
        this.unlisten = this.props.history.listen((location) => {

            const searchString = queryString.parse(location.search); //this is a bit much just to parse a single query, but in a real project i'd use this for many reasons.
            const lookupCity = searchString.city ? searchString.city : defaultCity;

            getWeatherForCity(lookupCity).then((response) => {
                // handle success
                this.setState({
                    city: response.data.name,
                    wind: this.parseWind(response.data.wind),
                    humidity: response.data.main.humidity,
                    temp: Math.round(response.data.main.temp)
                })

            })
                .catch(function (error) {
                    // handle error

                    /*
                    *
                    * for general network errors i'd normally handle this by sending a global network error event, and subscribing to it from an error component to keep things decoupled
                    * That way you can catch both the general errors by the underlying network layer
                    *
                    * */

                    console.log("error:", error);
                })
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {

        const {city, wind, humidity, temp} = this.state;
        return (
            <div className="SomeBEMClassName">
                <WidgetWrapper history={this.props.history} humidity={humidity} location={this.props.location}
                               wind={wind}
                               temp={temp} city={city}/>
            </div>
        );
    }
}

export default WeatherWidget;
