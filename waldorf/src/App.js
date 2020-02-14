import React, { Component } from 'react';
import Display from './Display/display';
import { store } from './store/index';
import setTech from './actions/index';
import setTechReducer from './reducers/index';

class App extends Component {


  dispacthButtonElm() {

    const text= 'Elm';
    store.dispatch(setTech(text));
    console.log("updated store " + store.getState().tech);
  }

  dispacthButtonRedux() {

    const text= 'redux';
    store.dispatch(setTech(text));
   console.log("updated store " + store.getState().tech);
  }


  render() {
    return (
      <div>
        <h3> APP REDUX </h3>
        <button>React</button>
        <button onClick={this.dispacthButtonElm}> elm </button>
        <button onClick={this.dispacthButtonRedux}> react-redux</button>
        <Display name={store.getState().tech} />
      </div>
    )
  }

}

export default App;