import React, { Component } from 'react';

import {createStore} from 'redux';

const initialState = {
    data: "test"
}


const reducer = (state = initialState , action) => {

    if(action.type === "ADD_DATA") {

       return {
           ...state,
           data:action.payload
       }

    }


return state;


}


const store = createStore(reducer);


store.subscribe( () => {
    console.log("subscription function" , store.getState());
})



 

class App extends Component {

render() {

return (

<div>
<h3> REDUX app</h3>
    <h1>
      {store.getState().data}
    </h1>
</div>
)
}
}


export default App;