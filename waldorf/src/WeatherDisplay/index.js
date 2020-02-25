import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { connect } from 'react-redux';

import {fetchApiWeather} from '../action';
import Button from 'react-bootstrap/Button';




class WeatherDisplay extends Component {
    render(){


    console.log("weather main funct", this.props.locationProp);
    return (
        <div>
            <Jumbotron>
                <h3> Weather Results for your city are :</h3>
               
                <h2> {} </h2>
                <h3> input name is : { this.props.locationProp} </h3>
            </Jumbotron>
            <Button onClick={this.props.onCall}>view results </Button>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    console.log(state.counter2, "stata props map")
    return {
        countOneProp: state.counter3,
        locationProp : state.counter2
   
    };

}
const mapDispatchToProps = (dispatch,state) =>  {
  
 
      return {

        propCity: state.counter2,
         onCall: () =>  dispatch(fetchApiWeather(this.propCity))
            
         
      
      }

    
        }
  


  export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);

