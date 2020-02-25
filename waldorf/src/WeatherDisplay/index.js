import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { connect } from 'react-redux';


import Button from 'react-bootstrap/Button';


class WeatherDisplay extends Component {
    render(){


    console.log("weather main funct", this.props.locationProp);
    return (
        <div>
            <Jumbotron>
                <h3> Weather Results for your city are :</h3>
               
                <h2> {} </h2>
                <h3> the city you have chose is : { this.props.cityProp} </h3>
                <h4> the current temp is {this.props.tempProp}</h4>
            </Jumbotron>
            <Button onClick={this.props.onCall}>view results </Button>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    console.log(state.counter3, "stata props map")
    return {
        countOneProp: state.counter3,
        locationProp : state.counter2,
        cityProp :state.counter3.name,
        tempProp: parseFloat(state.counter3.temp - 273.15).toFixed(2)
    };

}
const mapDispatchToProps = (dispatch,state) =>  {
  
 
      return {

        
         
      
      }

    
        }
  


  export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);

