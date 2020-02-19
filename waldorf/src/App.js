import React, { Component } from 'react';
import store from './store';

class App extends Component {

render() {

return (

<div>
<h3> REDUX app</h3>
    <h1>
        {store.getStore().data}
    </h1>
</div>
)
}
}


export default App;