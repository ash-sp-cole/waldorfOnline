import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';

import {connect} from 'react-redux';


const WeatherDisplay = (dispatch)=>{


return(
    <div>
        <Jumbotron>
            <h3> Weather Results for your city are :</h3>
            {/* {props.weatherCity} */}
            <h2>{}</h2>
        </Jumbotron>
    </div>
)
}
const mapDispatch = () => {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
    const location = "tokyo";
     return dispatch => axios.get(API_URL + location + process.env.REACT_APP_API_KEY)
 
    
}


export default connect(mapDispatch)(WeatherDisplay);


