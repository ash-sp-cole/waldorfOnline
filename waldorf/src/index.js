import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



 export const store = createStore(reducer, applyMiddleware(thunk));

console.log('index js state vbalues', store.getState().counter2);


ReactDOM.render (<Provider store ={store}><App/> </Provider>, document.getElementById("root"));