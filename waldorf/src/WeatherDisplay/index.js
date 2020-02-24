import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import { store } from '../index';
import { connect } from 'react-redux';

import thunk from 'redux-thunk';


const WeatherDisplay = () => {

    console.log("weather main funct");
    return (
        <div>
            <Jumbotron>
                <h3> Weather Results for your city are :</h3>
                {/* {props.weatherCity} */}
                <h2>{}</h2>
            </Jumbotron>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        countOneProp: state.counter3

    };

}
const mapDispatchToProps = (dispatch) => {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
    const location = "tokyo";
   
    return  axios.get(API_URL + location + process.env.REACT_APP_API_KEY)
  
        .then (response => {
            console.log(response);
            dispatch({
                type: "ADD_API",
                payload: response.data
            })
           
        })
  
    }
      
  



export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);

