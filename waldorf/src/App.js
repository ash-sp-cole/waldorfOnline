import React, { Component } from 'react';
import Search from './search';
import Display from './Display/display';




class App extends Component {

  state = {

    name: ["david", "sam", "alina", "bree"],
    showSearch: false

  }

  searchChangeHandler = (e) => {

    this.setState({ name: e.target.value })


  }

  toggleSearchHandler = (e) => {

    const doesShow = this.state.showSearch;
    this.setState({ showSearch: !doesShow });


  }

  render() {

    let showDisplay = null;


    if (this.state.showSearch) {

      showDisplay = (

        <div>
          {this.state.name.map(name => {

            return <Display
              name={name}

            />

          })}


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
        {showDisplay};
      </div>

    )

  }

}

export default App;
