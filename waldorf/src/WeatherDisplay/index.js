import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';

import { connect } from 'react-redux';


const  getWeather = (request)=> {
    console.log(request);
    return {
      type: "ADD_API",
      payload: request
    };
  }


class WeatherDisplay extends Component {
    render(){


    console.log("weather main funct", this.props.countOneProp );
    return (
        <div>
            <Jumbotron>
                <h3> Weather Results for your city are :</h3>
               
                <h2> {this.props.countOneProp} </h2>
                <h3> input name is : { this.props.locationProp} </h3>
            </Jumbotron>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    console.log(state.counter3, "stata props map")
    return {
        countOneProp: state.counter3,
        locationProp : state.counter2
   
    };

}
const mapDispatchToProps = (state) => {

    const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
    const location = "hamburg"
    if(location !== "") {
   return (dispatch) => {
  axios.get(API_URL + location + process.env.REACT_APP_API_KEY)
  
    .then ((response) => {
        dispatch(getWeather(response.data.main.temp
            ))
      
    })
    
}
    }

}
    
  export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);

