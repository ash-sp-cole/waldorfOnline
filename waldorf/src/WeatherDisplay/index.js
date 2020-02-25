import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { connect } from 'react-redux';





class WeatherDisplay extends Component {
    render(){


    console.log("weather main funct", this.props.locationProp);
    return (
        <div>
            <Jumbotron>
                <h3> Weather Results for your city are :</h3>
               
                <h2> {} </h2>
                <h3> the city you have chose is : { this.props.cityProp} </h3>
                <h4> the current temp is 
                    <br/>{this.props.tempProp}</h4>
            </Jumbotron>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    console.log(state.storeCityName)
    
    return {
       
        locationProp : state.counter2,
        // cityProp:state.storeCityName.name,
        tempProp: parseFloat(state.storeTemp.temp - 273.15).toFixed(2)
    };

}
const mapDispatchToProps = (dispatch,state) =>  {
  
 
      return {

        
         
      
      }

    
        }
  


  export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);

