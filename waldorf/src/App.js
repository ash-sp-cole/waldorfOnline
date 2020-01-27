import React, { Component } from 'react';
import Search from './search';
import Display from './Display/display';




class App extends Component {

  state = {

    name: "dsd",
    showSearch: false

  }

  searchChangeHandler = (e) => {

    this.setState({ name: e.target.value })


  }

  toggleSearchHandler = (event) => {

    const doesShow = this.state.showSearch;
    this.setState({ showSearch: !doesShow });


  }

  render() {

    let showDisplay = null;


    if (this.state.showSearch) {

      showDisplay = (

        <div>
          <Display
            student={this.state.name}
          />
          <h1> hello worldddddddddddddddddddd</h1>


        </div>
      )

    }



    return (
      <div>
        hello test waldorf world
<Search
          searchStudent={this.searchChangeHandler} />

        <button
          onClick={this.toggleSearchHandler}>
          SHOW RESULTS
        </button>
        {console.log(this.state.name)};
      </div>

    )

  }

}

export default App;
