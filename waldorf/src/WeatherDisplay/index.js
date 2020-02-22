import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const WeatherDisplay = (props)=>{

return(
    <div>
        <Jumbotron>
            <h3> Weather Results for your city are :</h3>
            {props.weatherCity}
        </Jumbotron>
    </div>
)
}
export default WeatherDisplay;