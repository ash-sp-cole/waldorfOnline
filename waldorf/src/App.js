import React, { Component } from 'react';
import Display from './Display/display';

import { createStore } from 'redux';

const initialState = {
tech: 'react'

};
const store = createStore(reducer, initialState);

class App extends Component {



render() {
  return(
    <div>
      <h3> APP REDUX </h3>
      <Display name="test state"/>
    </div>
  )
}

}

export default App;