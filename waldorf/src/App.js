import React, { Component } from 'react';

import {store} from './store';





class App extends Component {

onClickChangeHandler = () => {


    store.dispatch({
        type: "ADD_DATA",
        payload :"new test 88"
    })
    
  this.componentDidUpdate();
    

}
componentDidUpdate () {
    store.getState();
    store.subscribe( ()=>{
        console.log("subs", store.getState())
    })

}

render() {

return (

<div>
<h3> REDUX app</h3>
<button onClick={this.onClickChangeHandler}> Click me please </button>
    <h1>
    {store.getState().data}
    </h1>
</div>
)
}
}


export default App;