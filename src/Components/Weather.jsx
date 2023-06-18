import React from "react";
import Sun from '../Resources/sun.png'

export default class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        const { location, temperature, weather_descriptions, is_day, weather_icons } = this.props;
        return(
            <div className="weather-container">
                <div className="header"><strong>{location}</strong></div>
                <div className="inner-container">
                    <div className="image"><img src={weather_icons[0]}></img></div>
                    <div className="current-weather">{temperature}°</div>
                </div>
                <div className="footer">{weather_descriptions[0]}</div><br />
            </div>
        )
    }
}