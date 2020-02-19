import {createStore} from 'redux';

import reducer from '../reducer';

const initialState = {
    data: 'test data'
}
const state = initialState;

const store = createStore(reducer, state)

export default store;