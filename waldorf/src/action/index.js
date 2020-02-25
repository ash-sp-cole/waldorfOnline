
import axios from 'axios';
export const ADD_API = "ADD_API";


export const getWeather = (response) => ({

    type: ADD_API,
    payload: response
});

export const fetchApiWeather =  (city) =>{

    return dispatch => {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
    const location = city
   

       return  axios.get(API_URL + location + process.env.REACT_APP_API_KEY)

            .then(res => dispatch(getWeather(res.data.main)))

        }

}
