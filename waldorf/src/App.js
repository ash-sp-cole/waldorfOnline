import React, { Component } from 'react';
import Display from './Display/display';




class App extends Component {

  g


  render() {

    return (
      <div>
        <h3> APP REDUX </h3>
        <button>React</button>
        <button onClick={this.props.addToData}> elm </button>
        <button onClick={this.dispacthButtonRedux}> react-redux</button>
        <p></p>
        <Display/>
      </div>
    )
  }

}




export default App;